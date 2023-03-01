import { useTranslation } from 'next-i18next'

export default function RoadmapCard({ item, index }) {
  const { t } = useTranslation('common');
  return (
    <div className="roadmap_card" key={item._id}>
      <h3 className="title pr-4 font-['quicksand-bold']">{item.roadmap_title}</h3>
      <ul>
        {item.roadmap_content.map((content, index1) => {
          return (
            <li key={index1} className="text pr-4 mb-6 font-['quicksand-semibold']">
              {content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
