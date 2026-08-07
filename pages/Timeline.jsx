import "./Timeline.css";

const timelineEvents = [
  {
    title: "Birth of Lord Rama",
    location: "Ayodhya",
    summary:
      "Lord Rama was born to King Dasharatha and Queen Kaushalya in the royal city of Ayodhya. His birth marked the incarnation of Lord Vishnu on Earth to restore dharma and destroy the forces of evil.",
    characters: "Rama, Dasharatha, Kaushalya",
  },
  {
    title: "Vishwamitra Arrives",
    location: "Ayodhya",
    summary:
      "Sage Vishwamitra requested Rama and Lakshmana to accompany him in order to protect sacred rituals from demonic disturbances. This marked the beginning of Rama’s journey as a protector of righteousness.",
    characters: "Rama, Lakshmana, Vishwamitra",
  },
  {
    title: "Tataka Vadha",
    location: "Forest of Siddhashrama",
    summary:
      "Rama defeated the demoness Tataka under the guidance of Sage Vishwamitra, demonstrating his divine strength and commitment to protecting sages and dharma.",
    characters: "Rama, Lakshmana, Vishwamitra, Tataka",
  },
  {
    title: "Sita Swayamvara",
    location: "Mithila",
    summary:
      "Rama broke the mighty bow of Lord Shiva and won the hand of Princess Sita in marriage, forming one of the most sacred and celebrated unions in Hindu tradition.",
    characters: "Rama, Sita, Janaka, Lakshmana",
  },
  {
    title: "Exile Begins",
    location: "Ayodhya",
    summary:
      "Honoring his father’s promise, Rama accepted fourteen years of exile. Sita and Lakshmana chose to accompany him, demonstrating devotion, loyalty, and sacrifice.",
    characters: "Rama, Sita, Lakshmana, Dasharatha, Kaikeyi",
  },
  {
    title: "Panchavati",
    location: "Panchavati",
    summary:
      "Rama, Sita, and Lakshmana settled in Panchavati, where many pivotal events unfolded, including the arrival of Surpanakha and the beginning of Ravana’s plot.",
    characters: "Rama, Sita, Lakshmana",
  },
  {
    title: "Golden Deer",
    location: "Panchavati",
    summary:
      "Maricha appeared in the form of a magical golden deer. Sita requested Rama to capture it, leading to the separation that made Ravana’s abduction possible.",
    characters: "Rama, Sita, Lakshmana, Maricha",
  },
  {
    title: "Sita Abduction",
    location: "Panchavati",
    summary:
      "Ravana abducted Sita after deceiving Lakshmana and Rama. This event became the central turning point of the Ramayana and initiated the great quest for her rescue.",
    characters: "Sita, Ravana, Maricha, Lakshmana",
  },
  {
    title: "Jatayu’s Sacrifice",
    location: "Dandakaranya",
    summary:
      "The noble vulture king Jatayu fought Ravana to rescue Sita and sacrificed his life. He later informed Rama of the direction in which Sita had been taken.",
    characters: "Jatayu, Ravana, Rama, Sita",
  },
  {
    title: "Meeting Hanuman",
    location: "Kishkindha",
    summary:
      "Rama met Hanuman, whose devotion, intelligence, and strength made him the greatest ally in the mission to rescue Sita and defeat Ravana.",
    characters: "Rama, Lakshmana, Hanuman",
  },
  {
    title: "Alliance with Sugriva",
    location: "Kishkindha",
    summary:
      "Rama formed an alliance with Sugriva, promising to restore his kingdom in exchange for assistance in searching for Sita.",
    characters: "Rama, Sugriva, Hanuman",
  },
  {
    title: "Vali Vadha",
    location: "Kishkindha",
    summary:
      "Rama defeated Vali and restored Sugriva to the throne of Kishkindha, strengthening the alliance between Rama and the Vanara kingdom.",
    characters: "Rama, Vali, Sugriva, Tara",
  },
  {
    title: "Search for Sita",
    location: "Southern Regions",
    summary:
      "The Vanara army searched in all directions for Sita. Hanuman, guided by Jambavan, ultimately discovered her whereabouts in Lanka.",
    characters: "Hanuman, Jambavan, Angada",
  },
  {
    title: "Hanuman in Lanka",
    location: "Lanka",
    summary:
      "Hanuman crossed the ocean, found Sita in Ashoka Vatika, delivered Rama’s ring, and reassured her that rescue would soon come.",
    characters: "Hanuman, Sita",
  },
  {
    title: "Lanka Dahan",
    location: "Lanka",
    summary:
      "After being captured and his tail set on fire, Hanuman escaped and burned large portions of Lanka, demonstrating the power of devotion and courage.",
    characters: "Hanuman, Ravana",
  },
  {
    title: "Ram Setu",
    location: "Rameswaram",
    summary:
      "The Vanara army constructed the bridge across the ocean to reach Lanka, symbolizing unity, faith, and determination in the service of dharma.",
    characters: "Rama, Hanuman, Nala, Neela",
  },
  {
    title: "War with Ravana",
    location: "Lanka",
    summary:
      "The great war between Rama’s forces and the armies of Lanka began, involving legendary battles between warriors of extraordinary strength and divine weapons.",
    characters: "Rama, Lakshmana, Hanuman, Ravana",
  },
  {
    title: "Indrajit Defeated",
    location: "Lanka",
    summary:
      "Lakshmana defeated Meghanada (Indrajit), Ravana’s most powerful son, significantly weakening the military strength of Lanka.",
    characters: "Lakshmana, Indrajit, Vibhishana",
  },
  {
    title: "Ravana Vadha",
    location: "Lanka",
    summary:
      "Rama defeated Ravana in the final battle, restoring righteousness and ending the tyranny that had oppressed both humans and celestial beings.",
    characters: "Rama, Ravana, Vibhishana",
  },
  {
    title: "Return to Ayodhya",
    location: "Ayodhya",
    summary:
      "Rama, Sita, and Lakshmana returned to Ayodhya after completing the exile. Their return was celebrated with lamps, giving rise to the festival of Diwali.",
    characters: "Rama, Sita, Lakshmana, Bharata",
  },
  {
    title: "Coronation of Rama",
    location: "Ayodhya",
    summary:
      "Rama was crowned king of Ayodhya, ushering in the era of Rama Rajya, an ideal kingdom founded upon justice, compassion, prosperity, and righteousness.",
    characters: "Rama, Sita, Bharata, Lakshmana",
  },
];

export const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1>Ramayana Timeline</h1>
      <p className="timeline-subtitle">
        The complete journey of Lord Rama from Ayodhya to Lanka and back.
      </p>

      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-node"></div>

            <div className="timeline-card">
              <span className="timeline-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{event.title}</h2>

              <p className="timeline-location">📍 {event.location}</p>

              <p className="timeline-summary">{event.summary}</p>

              <div className="timeline-characters">
                <strong>Characters:</strong> {event.characters}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};