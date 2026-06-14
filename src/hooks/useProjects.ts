import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface Project {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  createdAt?: any;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(data);
      setError(null);
    } catch (err: any) {
      console.error('Error fetching projects:', err);
      // Fallback for missing index error
      if (err.message && err.message.includes('index')) {
         try {
           const fallbackQ = query(collection(db, 'projects'));
           const fbSnapshot = await getDocs(fallbackQ);
           const data = fbSnapshot.docs.map(doc => ({
             id: doc.id,
             ...doc.data()
           })) as Project[];
           setProjects(data);
           setError(null);
         } catch(e: any) {
           setError('Gagal mengambil data proyek: ' + e.message);
         }
      } else {
        setError('Gagal mengambil data proyek: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (projectData: Omit<Project, 'id'>) => {
    try {
      await addDoc(collection(db, 'projects'), {
        ...projectData,
        createdAt: serverTimestamp()
      });
      await fetchProjects();
      return true;
    } catch (err: any) {
      console.error('Error adding project:', err);
      setError('Gagal menambahkan proyek: ' + err.message);
      return false;
    }
  };

  const updateProject = async (id: string, projectData: Partial<Project>) => {
    try {
      const projectRef = doc(db, 'projects', id);
      await updateDoc(projectRef, projectData);
      await fetchProjects();
      return true;
    } catch (err: any) {
      console.error('Error updating project:', err);
      setError('Gagal memperbarui proyek: ' + err.message);
      return false;
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'projects', id));
      await fetchProjects();
      return true;
    } catch (err: any) {
      console.error('Error deleting project:', err);
      setError('Gagal menghapus proyek: ' + err.message);
      return false;
    }
  };

  return {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    refresh: fetchProjects
  };
}
