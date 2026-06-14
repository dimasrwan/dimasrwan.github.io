import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiFirebase,
  SiFigma
} from '@icons-pack/react-simple-icons';

const techs = [
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Flutter', Icon: SiFlutter },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'Figma', Icon: SiFigma },
]

// Duplicate for seamless looping
const repeatedTechs = [...techs, ...techs, ...techs, ...techs];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks for seamless fading on edges */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-between">
        <div className="w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent"></div>
        <div className="w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent"></div>
      </div>

      <div className="relative flex items-center w-full">
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `,
        }} />
        <div 
          className="flex items-center space-x-12 md:space-x-24 animate-[marquee_40s_linear_infinite] whitespace-nowrap w-max"
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {repeatedTechs.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center space-x-3 text-neutral-500 hover:text-white transition-colors duration-300"
            >
              <tech.Icon className="w-8 h-8 flex-shrink-0" />
              <span className="text-lg md:text-xl font-medium tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}