import { useEffect, useState } from "react";
import "./Timeline.css";

export const timelineEvents = [
  {
    title: "Birth of Lord Rama",
    location: "Ayodhya",
    coordinates: [82.1998, 26.7922],
    summary:
      "King Dasharatha of Ayodhya, ruler of the Kosala kingdom, was without an heir despite having three queens. He performed the Putrakameshti Yagna, a sacred fire ritual, to be blessed with sons. As a result, Kaushalya gave birth to Rama, Kaikeyi to Bharata, and Sumitra to the twins Lakshmana and Shatrughna. Rama's birth was celebrated as the incarnation of Lord Vishnu, who had taken human form to rid the earth of the tyrant Ravana and to restore dharma. From childhood, Rama displayed exceptional virtue, discipline, and devotion to his elders, distinguishing him as an ideal prince destined for greatness.",
    characters:
      "Rama, Dasharatha, Kaushalya, Bharata, Lakshmana, Shatrughna, Kaikeyi, Sumitra",
  },
  {
    title: "Vishwamitra Arrives",
    location: "Ayodhya",
    coordinates: [82.1998, 26.7922],
    summary:
      "The powerful sage Vishwamitra arrived at Dasharatha's court seeking help. Demons, particularly Tataka and her sons Maricha and Subahu, had been disrupting his sacred yagnas in the forest, defiling the rituals with blood and flesh. Vishwamitra requested that young Rama, still a teenager, accompany him to protect the sacrifices. Though Dasharatha was reluctant to part with his beloved son, he ultimately relented on the counsel of sage Vasishtha, understanding this to be Rama's destined path. Rama and Lakshmana departed with Vishwamitra, marking their first step away from the comforts of palace life into the world of dharic duty.",
    characters: "Rama, Lakshmana, Vishwamitra, Dasharatha, Vasishtha",
  },
  {
    title: "Tataka Vadha",
    location: "Forest of Siddhashrama",
    coordinates: [83.98, 25.57],
    summary:
      "On the way to Siddhashrama, Vishwamitra led the princes through the dreaded forest inhabited by the demoness Tataka, once a beautiful yakshini cursed into a monstrous form. Despite Rama's initial hesitation to kill a woman, Vishwamitra explained that Tataka's cruelty and the threat she posed to sages and travelers made her destruction necessary for the greater good. Rama shot her down with an arrow, freeing the forest of her terror. This was Rama's first major act of valor, and Vishwamitra rewarded him afterward with knowledge of celestial weapons (astras) to prepare him for greater battles ahead.",
    characters: "Rama, Lakshmana, Vishwamitra, Tataka",
  },
  {
    title: "Sita Swayamvara",
    location: "Mithila",
    coordinates: [85.4833, 26.59],
    summary:
      "King Janaka of Mithila had organized a swayamvara for his daughter Sita, who was discovered as an infant while he ploughed a sacred field. The condition for winning her hand was stringing and breaking the divine bow of Lord Shiva, an object of immense weight that no king or warrior had ever managed to lift. Vishwamitra brought Rama and Lakshmana to witness the event on their journey. When Rama effortlessly lifted the bow and broke it while attempting to string it, the assembly was stunned. Janaka joyfully agreed to the marriage, and Sita placed a garland around Rama's neck, sealing their sacred union, later solemnized alongside the marriages of Lakshmana, Bharata, and Shatrughna to Sita's sisters and cousins.",
    characters:
      "Rama, Sita, Janaka, Lakshmana, Vishwamitra, Bharata, Shatrughna",
  },
  {
    title: "Exile Begins",
    location: "Ayodhya",
    coordinates: [82.1998, 26.7922],
    summary:
      "As Dasharatha prepared to crown Rama as his successor, his queen Kaikeyi, manipulated by her maid Manthara, invoked two boons Dasharatha had once granted her. She demanded that Bharata be crowned king instead, and that Rama be exiled to the forest for fourteen years. Bound by his word, the heartbroken king had no choice but to comply. Rama accepted the decree without protest or bitterness, prioritizing his father's honor and his own dharma over the throne. Sita insisted on accompanying her husband despite his objections, and Lakshmana too refused to remain behind, choosing to serve and protect his brother throughout the exile.",
    characters: "Rama, Sita, Lakshmana, Dasharatha, Kaikeyi, Manthara, Bharata",
  },
  {
    title: "Panchavati",
    location: "Panchavati",
    coordinates: [73.7898, 19.9975],
    summary:
      "After years of wandering through forests, visiting sages, and receiving guidance and blessings along the way, Rama, Sita, and Lakshmana settled in the tranquil forest region of Panchavati on the banks of the Godavari River, on the advice of sage Agastya. Lakshmana built a modest hermitage where the trio lived a peaceful, ascetic life. This idyllic period, however, set the stage for the pivotal and tragic events that would soon unfold, as their presence drew the attention of Ravana's sister, Surpanakha, and ultimately Ravana himself.",
    characters: "Rama, Sita, Lakshmana, Agastya",
  },
  {
    title: "Golden Deer",
    location: "Panchavati",
    coordinates: [73.7898, 19.9975],
    summary:
      "Following Surpanakha's failed advances toward Rama and Lakshmana and her subsequent mutilation at Lakshmana's hands, her brothers Khara and Dushana attacked in retaliation and were defeated by Rama alone. Enraged, Surpanakha appealed to Ravana, who devised a plan with the demon Maricha. Maricha transformed himself into a strikingly beautiful golden deer and wandered near the hermitage. Captivated by its beauty, Sita begged Rama to capture it for her. Rama pursued the deer deep into the forest, and when he finally struck it, Maricha cried out in Rama's voice, prompting a worried Sita to send Lakshmana after him as well, leaving her alone and vulnerable.",
    characters: "Rama, Sita, Lakshmana, Maricha, Surpanakha, Ravana",
  },
  {
    title: "Sita Abduction",
    location: "Panchavati",
    coordinates: [73.7898, 19.9975],
    summary:
      "With Rama and Lakshmana both away, Ravana, disguised as a wandering mendicant, approached the hermitage and requested alms from Sita. As she stepped past the protective boundary line Lakshmana had drawn (the Lakshmana Rekha), Ravana revealed his true form, seized her, and forced her into his flying chariot, the Pushpaka Vimana. Despite her cries for help and desperate resistance, Sita was carried away to Lanka. This abduction, born of deception and driven by Ravana's obsession and thirst for revenge against Rama and Lakshmana for Surpanakha's humiliation, became the defining crisis of the entire epic.",
    characters: "Sita, Ravana, Maricha, Lakshmana, Rama",
  },
  {
    title: "Jatayu's Sacrifice",
    location: "Dandakaranya",
    coordinates: [82.0, 19.5],
    summary:
      "As Ravana flew overhead with the captive Sita, the aged but valiant vulture king Jatayu, a friend of Dasharatha, spotted them and launched a fierce aerial battle to rescue her. Despite his age, Jatayu fought bravely, tearing at Ravana's chariot and body, but was ultimately overpowered when Ravana severed his wings with his sword. As Rama and Lakshmana searched frantically for Sita, they found the dying Jatayu, who used his final breaths to tell them of Ravana's identity and the direction he had flown. Rama performed Jatayu's last rites with the reverence due to a father, honoring his selfless sacrifice.",
    characters: "Jatayu, Ravana, Rama, Sita, Lakshmana",
  },
  {
    title: "Meeting Hanuman",
    location: "Kishkindha",
    coordinates: [76.46, 15.335],
    summary:
      "Continuing their search, Rama and Lakshmana arrived near Kishkindha, the kingdom of the Vanaras, where they encountered Hanuman, a minister of the exiled monkey king Sugriva. Hanuman, initially cautious and disguised as a Brahmin to assess their intentions, was moved by Rama's humility and righteousness upon learning his story. Revealing his true form and considerable strength, Hanuman pledged his complete loyalty and devotion to Rama on the spot. This meeting marked the beginning of one of the most cherished relationships in the epic, as Hanuman would go on to become Rama's most trusted ally and instrument in the rescue of Sita.",
    characters: "Rama, Lakshmana, Hanuman",
  },
  {
    title: "Alliance with Sugriva",
    location: "Kishkindha",
    coordinates: [76.46, 15.335],
    summary:
      "Hanuman introduced Rama and Lakshmana to Sugriva, who was living in exile after his brother Vali had usurped his throne and wife. Sugriva, too, sought help against Vali, whom he could not defeat alone due to a boon Vali possessed. Recognizing shared cause, Rama and Sugriva formed a solemn alliance around a sacred fire: Rama would help Sugriva reclaim his kingdom, and in return, Sugriva and his Vanara army would help Rama find and rescue Sita. This friendship exemplified mutual aid transcending species and circumstance, setting in motion the mobilization of the Vanara forces.",
    characters: "Rama, Sugriva, Hanuman, Lakshmana",
  },
  {
    title: "Vali Vadha",
    location: "Kishkindha",
    coordinates: [76.46, 15.335],
    summary:
      "To fulfill his promise, Rama accompanied Sugriva to challenge Vali to single combat. During their first duel, Rama held back, unable to distinguish between the identical-looking brothers. Sugriva returned with a garland of flowers to mark himself, and the duel resumed. Concealed behind a tree, Rama shot Vali with an arrow, an act that has since been widely debated for its ethical complexity, though within the narrative it is justified as necessary given Vali's boon and past wrongs against his brother and Sugriva's wife, Tara. As he lay dying, Vali reconciled with Rama, and Sugriva was subsequently crowned king of Kishkindha, with Vali's son Angada made crown prince.",
    characters: "Rama, Vali, Sugriva, Tara, Angada",
  },
  {
    title: "Search for Sita",
    location: "Southern Regions",
    coordinates: [77.5385, 8.0883],
    summary:
      "True to his word, Sugriva mobilized vast Vanara armies and dispatched search parties in all four cardinal directions to find Sita. The southern search party, led by Angada and including Hanuman, Jambavan, and others, faced numerous trials, including near starvation and encounters with strange creatures, as the deadline set by Sugriva approached without success. It was the wise old bear-king Jambavan who reminded Hanuman of his forgotten divine powers of flight and immense strength, granted to him in childhood, reigniting the group's hope and inspiring Hanuman to undertake the seemingly impossible leap across the ocean to Lanka.",
    characters: "Hanuman, Jambavan, Angada, Sugriva",
  },
  {
    title: "Hanuman in Lanka",
    location: "Lanka",
    coordinates: [80.7718, 7.8731],
    summary:
      "Hanuman made a monumental leap across the ocean and entered Lanka, shrinking himself to avoid detection as he searched the city by night. He eventually found Sita held captive in the Ashoka Vatika grove, guarded by demonesses, steadfastly refusing Ravana's advances and remaining devoted to Rama despite threats and temptations. Hanuman revealed himself quietly, presented Rama's ring as proof of his mission, and comforted the grieving Sita with news that Rama was coming for her. In turn, Sita gave him a token, her hairpin (choodamani), to carry back to Rama as proof of their meeting.",
    characters: "Hanuman, Sita, Ravana",
  },
  {
    title: "Lanka Dahan",
    location: "Lanka",
    coordinates: [80.7718, 7.8731],
    summary:
      "Before leaving, Hanuman allowed himself to be captured by Ravana's forces after deliberately destroying parts of the Ashoka Vatika garden to provoke a response and gauge Lanka's strength. Brought before Ravana, Hanuman delivered a bold warning on Rama's behalf, refusing to bow. In retaliation, Ravana ordered Hanuman's tail set ablaze. Using his mystical powers, Hanuman escaped his bonds and, with his tail still burning, leapt across the rooftops of Lanka, setting much of the golden city on fire before extinguishing the flames in the ocean and making his way back to report to Rama.",
    characters: "Hanuman, Ravana",
  },
  {
    title: "Ram Setu",
    location: "Rameswaram",
    coordinates: [79.3129, 9.2876],
    summary:
      "With Sita's location confirmed, Rama led the Vanara army to the southern shore of India, facing the vast ocean that separated them from Lanka. After Rama's initial attempts to appeal to the ocean god Varuna for passage went unanswered, and his anger nearly led him to dry up the sea with celestial weapons, Varuna appeared and advised constructing a bridge instead. Under the engineering guidance of the architects Nala and Neela, the Vanara army built a floating bridge of stones across the ocean, a feat still remembered as Ram Setu, symbolizing the power of collective faith, ingenuity, and unwavering resolve.",
    characters: "Rama, Hanuman, Nala, Neela, Sugriva",
  },
  {
    title: "War with Ravana",
    location: "Lanka",
    coordinates: [80.7718, 7.8731],
    summary:
      "With the bridge complete, Rama's army crossed into Lanka and laid siege to the city. Vibhishana, Ravana's own brother, defected to Rama's side after unsuccessfully urging Ravana to return Sita and avoid war, and his intimate knowledge of Lanka proved invaluable. What followed was a prolonged and brutal war involving legendary warriors, celestial weapons, and shifting fortunes on both sides. Key battles saw the deaths of formidable demon commanders including Kumbhakarna, Ravana's giant brother who woke from his months-long slumber only to fight and fall, further weakening Lanka's defenses.",
    characters: "Rama, Lakshmana, Hanuman, Ravana, Vibhishana, Kumbhakarna",
  },
  {
    title: "Indrajit Defeated",
    location: "Lanka",
    coordinates: [80.7718, 7.8731],
    summary:
      "Ravana's son Meghanada, known as Indrajit for having once defeated the god Indra, was among the most formidable warriors of Lanka, skilled in illusion and possessing devastating celestial weapons. He inflicted heavy losses on Rama's army, at one point incapacitating both Rama and Lakshmana with the deadly Nagapasha weapon, requiring Garuda's intervention to save them. In the decisive confrontation, guided by Vibhishana's counsel on the precise ritual conditions needed to make Indrajit vulnerable, Lakshmana engaged him in a fierce battle and ultimately slew him, dealing a crushing blow to Ravana's forces and morale.",
    characters: "Lakshmana, Indrajit, Vibhishana, Rama, Garuda",
  },
  {
    title: "Ravana Vadha",
    location: "Lanka",
    coordinates: [80.7718, 7.8731],
    summary:
      "With his son and brother dead and his armies decimated, Ravana himself finally rode into battle against Rama. Their final confrontation was an epic clash of divine and demonic power, with Ravana's multiple heads and arms regenerating as fast as Rama could strike them down. Rama ultimately deployed the Brahmastra, a weapon of unmatched power blessed by sage Agastya, aimed precisely at Ravana's navel, the source of his immortality nectar, ending the tyrant's reign for good. Vibhishana, though grieving his brother, was crowned the new king of Lanka, and dharma was restored to the land.",
    characters: "Rama, Ravana, Vibhishana, Agastya",
  },
  {
    title: "Return to Ayodhya",
    location: "Ayodhya",
    coordinates: [82.1998, 26.7922],
    summary:
      "With Ravana defeated and Sita's chastity affirmed through her Agni Pariksha (trial by fire), the fourteen years of exile drew to a close. Rama, Sita, and Lakshmana boarded the Pushpaka Vimana, along with Sugriva, Vibhishana, Hanuman, and the Vanara allies, and flew back toward Ayodhya. Bharata, who had ruled as a caretaker in Rama's name, placing his brother's sandals on the throne as a symbol of his rightful sovereignty, joyfully welcomed them home. The citizens of Ayodhya illuminated the entire kingdom with rows of oil lamps to celebrate Rama's return from exile and his victory over evil, an occasion still commemorated today as the festival of Diwali.",
    characters: "Rama, Sita, Lakshmana, Bharata, Sugriva, Vibhishana, Hanuman",
  },
  {
    title: "Coronation of Rama",
    location: "Ayodhya",
    coordinates: [82.1998, 26.7922],
    summary:
      "Soon after their triumphant return, Rama was formally crowned king of Ayodhya in a grand ceremony attended by sages, kings, and the Vanara allies who had fought alongside him. His reign, known as Rama Rajya, became the timeless ideal of righteous governance, characterized by justice, prosperity, equality, and the wellbeing of every subject regardless of status. Sita was crowned queen beside him, and Bharata, Lakshmana, and Shatrughna took their places as loyal brothers and ministers of the kingdom. Rama Rajya remains, to this day, the enduring symbol of a just and dharmic society in Indian tradition.",
    characters: "Rama, Sita, Bharata, Lakshmana, Shatrughna",
  },
];

export const Timeline = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <h1>Ramayana Timeline</h1>

      <p className="timeline-subtitle">
        The complete journey of Lord Rama from Ayodhya to Lanka and back.
      </p>

      <div className="timeline">
        {timelineEvents.map((event, index) => {
          const progress = index / (timelineEvents.length - 1);

          const nodeColor =
            progress < 0.12
              ? "linear-gradient(135deg, #7a0000, #9b111e)"
              : progress < 0.24
              ? "linear-gradient(135deg, #9b111e, #c21807)"
              : progress < 0.36
              ? "linear-gradient(135deg, #c21807, #d84315)"
              : progress < 0.48
              ? "linear-gradient(135deg, #d84315, #ef6c00)"
              : progress < 0.60
              ? "linear-gradient(135deg, #ef6c00, #fb8c00)"
              : progress < 0.72
              ? "linear-gradient(135deg, #fb8c00, #f9a825)"
              : progress < 0.84
              ? "linear-gradient(135deg, #f9a825, #fbc02d)"
              : progress < 0.94
              ? "linear-gradient(135deg, #fbc02d, #ffd54f)"
              : "linear-gradient(135deg, #ffd54f, #ffec8b, #fff3b0)";

          return (
            <div className="timeline-item" key={index}>
              <div
                className="timeline-node"
                style={{ background: nodeColor }}
              ></div>

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
          );
        })}
      </div>

      {/* Move to Top Button */}
      <button
        className={showTopBtn ? "back-to-top visible" : "back-to-top"}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};