import MemorySection from './MemorySection';
import memories from '../util/memories';
import TextStyles from '../css/TextStyles.module.css';

export default function()
{
    return (
        <>
          <h3 className={TextStyles.sectionTitle}>Memory Lane</h3>
    <div>

      {memories.map((memory, index) => (
        <MemorySection
          key={index}
          title={memory.title}
          description={memory.description}
          image={memory.image}
          animation={memory.animation}
        />
      ))}
    </div>
        </>
    );
}