/**
 * Custom prompt generator designed for course generation.
 * This file divides the comprehensive General Awareness curriculum
 * (History - Ancient, Medieval, Modern; Polity; Geography - Physical, Indian, World;
 * Economy; Science - Physics, Chemistry, Biology; Static GK; and Current Affairs)
 * into distinct, granular chapters and generates dynamic prompts in the custom Markdown dialect.
 */

// Mapping of individual chapters to their specific topics
export const chunkTopics = {
  // ==================== HISTORY (ANCIENT) ====================
  1: {
    title: "History: Prehistoric Period & Indus Valley Civilization",
    topics: [
      "Prehistoric Period: Paleolithic Age (Bhimbetka, Tools, Art), Mesolithic Age (Microliths, Domestication), Neolithic Age (Agriculture, Polished Tools, Pottery), Chalcolithic Age (Copper Use, Painted Pottery)",
      "Indus Valley Civilization (IVC): Major sites - Harappa, Mohenjo-Daro, Dholavira, Lothal, Rakhigarhi, Kalibangan",
      "Town Planning: Grid Pattern, Citadel, Great Bath, Granaries, Drainage System, Street Layout",
      "Seals & Script: Steatite Seals, Unreadable Pictographic Script, Pashupati Seal, Unicorn Seal",
      "Agriculture & Trade: Crops (Wheat, Barley, Cotton), Weights & Measures, Trade with Mesopotamia and Egypt",
      "Society & Religion: Mother Goddess, Pashupati Mahadeva (Proto-Shiva), Animal Worship, Phallic Worship",
      "Art & Crafts: Bronze Dancing Girl (Mohenjo-Daro), Beads, Terracotta Figurines",
      "Decline of IVC: Theories (Aryan Invasion, Climatic Change, Tectonic Disturbances, River Drying)"
    ]
  },
  2: {
    title: "History: Vedic Period & Literature",
    topics: [
      "Rigvedic Age (Early Vedic): Geography (Sapta Sindhu), Tribal Polity (Janas), Society (Varna System - Brahmins, Kshatriyas, Vaishyas, Shudras), Economy (Cattle Rearing), Religion (Indra, Agni, Varuna, Soma)",
      "Later Vedic Age: Expansion to Gangetic Plains, Iron Age, Janapadas, 4 Varnas System became Rigid, Ashramas System",
      "Vedas: Rigveda (Hymns, Oldest), Yajurveda (Rituals), Samaveda (Melodies), Atharvaveda (Spells & Charms)",
      "Brahmanas & Aranyakas: Prose texts explaining rituals, Forest texts for hermits",
      "Upanishads: Philosophical texts, Concept of Brahman & Atman, 108 Upanishads",
      "Puranas: 18 Mahapuranas, Vishnu Purana, Bhagavata Purana, Shiva Purana",
      "Epics: Ramayana (Valmiki), Mahabharata (Ved Vyasa) - Bhagavad Gita",
      "Buddhist & Jain Literature: Tripitakas, Angas, Jataka Tales"
    ]
  },
  3: {
    title: "History: Mahajanapadas & Magadha Empire",
    topics: [
      "16 Mahajanapadas (600 BC): Magadha, Avanti, Kosala, Vatsa, Gandhara, Kashi, Malla, Vajji, etc.",
      "Magadha Empire: Haryanka Dynasty (Bimbisara, Ajatashatru), Shishunaga Dynasty, Nanda Dynasty (Mahapadma Nanda)",
      "Rise of Magadha: Strategic Location, Iron Ore Resources, Ganga River for Trade, Powerful Army",
      "Sisunaga Dynasty: Kalasoka, Second Buddhist Council",
      "Nanda Dynasty: Mahapadma Nanda (First Empire Builder), Dhana Nanda (Contemporary of Alexander)",
      "Alexander's Invasion (326 BC): Battle of Hydaspes (King Porus), Ambhi of Taxila, Impact (Opened Trade Routes)",
      "Post-Alexander: Chandragupta Maurya (Defeated Seleucus), Foundation of Mauryan Empire"
    ]
  },
  4: {
    title: "History: Mauryan Empire (Chandragupta to Ashoka)",
    topics: [
      "Chandragupta Maurya (322-298 BC): Defeated Dhana Nanda, Alliance with Chanakya (Kautilya/Chanakya), Defeated Seleucus Nicator (305 BC)",
      "Bindusara (298-273 BC): Extension of Empire, Deimachus (Greek Ambassador), Ashoka as Governor of Taxila and Ujjain",
      "Ashoka the Great (273-232 BC): Kalinga War (261 BC) - Massive Loss of Life, Conversion to Buddhism",
      "Ashoka's Dhamma: Principles - Non-violence, Tolerance, Respect for All Religions, Welfare of Subjects",
      "Ashoka's Edicts: Major Rock Edicts (14), Pillar Edicts (7), Minor Rock Edicts, Languages (Prakrit, Greek, Aramaic)",
      "Mauryan Administration: Central (Mantriparishad), Provincial (Kumara), Local (Sthanika), Municipal (Nagarika)",
      "Kautilya's Arthashastra: Treatise on Statecraft, Economy, Military Strategy",
      "Art & Architecture: Stupas (Sanchi, Barhut), Pillars (Lion Capital - National Emblem), Rock-cut Caves (Barabar Caves)",
      "Decline of Mauryas: Weak Successors, Economic Crisis, Brahminical Reaction"
    ]
  },
  5: {
    title: "History: Post-Mauryan Period & Foreign Invasions",
    topics: [
      "Shunga Dynasty (185-73 BC): Pushyamitra Shunga (Killed Brihadratha Maurya), Patron of Patanjali, Revival of Brahmanism, Buddhist Persecution",
      "Kanva Dynasty (73-28 BC): Last Brahmin Dynasty, Overthrown by Satavahanas",
      "Satavahana Dynasty (1st-3rd Century AD): Gautamiputra Satakarni, Yajna Sri Satakarni, The Great Andhras, Trade with Romans, Regional Kingdoms",
      "Indo-Greeks (180 BC - 10 AD): Demetrius (First Greek King in India), Menander (Milinda) - Converted to Buddhism by Nagasena (Milindapanho)",
      "Shakas (Scythians): Rudradaman I - Junagadh Rock Inscription, Patron of Sanskrit, Kshaharata Dynasty (Nahapana)",
      "Kushan Empire (1st-3rd Century AD): Kujula Kadphises, Kanishka (Greatest Kushan King) - Began Saka Era (78 AD), Patron of Gandhara Art, Fourth Buddhist Council at Kashmir",
      "Gandhara & Mathura School of Art: Gandhara - Graeco-Roman Influence (Buddhist Images), Mathura - Indigenous Style (Hindu-Buddhist)"
    ]
  },
  6: {
    title: "History: Gupta Empire (The Golden Age)",
    topics: [
      "Gupta Empire (319-550 AD): Chandragupta I (Founder - Ghatotkacha), Married Kumaradevi (Lichchhavi Princess), Started Gupta Era (319-20 AD)",
      "Samudragupta (335-380 AD): 'Napoleon of India' (V.A. Smith), Allahabad Pillar Inscription (Harisena), Conquered 9 Kings in North, 12 in South, Performed Ashvamedha",
      "Chandragupta II 'Vikramaditya' (380-415 AD): Saka Uprising (Killed Rudrasimha III), Ujjain as Capital, Iron Pillar at Mehrauli, Patronage of Navaratnas",
      "Golden Age: Literature - Kalidasa (Abhijnanasakuntalam, Meghaduta), Vishakhadatta (Mudrarakshasa), Shudraka (Mrichchhakatika), Amarasimha (Amarakosha)",
      "Science & Technology: Aryabhata (Aryabhatiya - Place Value System, Zero), Varahamihira (Panchasiddhantika, Brihat Samhita), Brahmagupta (Brahmasphutasiddhanta)",
      "Medicine: Charaka (Charaka Samhita), Sushruta (Sushruta Samhita - Surgery, Cataract), Vagbhata (Astanga Hridaya)",
      "Art & Architecture: Dashavatara Temple (Deogarh), Brick Temple (Bhitaragaon), Ajanta Caves, Ellora Caves, Nalanda University",
      "Decline of Guptas: Huna Invasions (Toramana, Mihirakula), Feudalism Rise, Fragmentation, Loss of Central Control"
    ]
  },
  7: {
    title: "History: Post-Gupta & Early Medieval Kingdoms",
    topics: [
      "Harshavardhana (606-647 AD): Pushyabhuti Dynasty, Thaneshwar, Kanauj, Hiuen Tsang (Xuanzang) Visit, Nalanda University, Prayag Assembly",
      "Harsha's Administration: Revenue System, Dharamshalas, Hospitals, Charity",
      "Hiuen Tsang's Account: Description of India, Nalanda University, Buddhism at its Peak, 'Record of the Western Regions'",
      "Pallavas (4th-9th Century): Mahendravarman I, Narasimhavarman I (Conquered Vatapi), Rock-cut Rathas (Five Rathas - Mahabalipuram), Shore Temple, Kailashanatha Temple (Kanchipuram)",
      "Chalukyas of Badami (6th-8th Century): Pulakeshin II (Defeated Harsha on Narmada, Aihole Inscription - Ravikirti), Vesara Style Architecture, Badami Caves",
      "Rashtrakutas (8th-10th Century): Dantidurga (Founder), Krishna I (Kailasa Temple - Ellora), Amoghavarsha I (Kavirajamarga - Patron of Jainism), 'The Great Cave Temple'",
      "Gurjara-Pratiharas: Nagabhatta I, Bhoja (Mihir Bhoja), Covered Western & Northern India, Conflicts with Palas and Rashtrakutas",
      "Palas: Gopala (Founder), Dharmapala, Devapala (Greatest), Patrons of Buddhism (Vikramshila, Nalanda, Odantapuri Universities)"
    ]
  },
  8: {
    title: "History: Rajput Kingdoms & Cholas",
    topics: [
      "Rajput Kingdoms: Chauhans (Ajmer, Prithviraj Chauhan - First and Second Battle of Tarain), Solankis (Gujarat, Bhimdev I, Kumarapala - Patron of Jainism), Paramaras (Malwa, Raja Bhoja - Bhojshala, Ujjain)",
      "Chola Empire (9th-13th Century): Vijayalaya (Founder), Rajaraja I (985-1014 AD) - Built Brihadeshwara Temple (Thanjavur), Rajendra I (1014-1044 AD) - Naval Expedition to Sri Vijaya (Sumatra), Gangaikondacholapuram",
      "Chola Administration: Central (King, Council), Provincial (Mandalam), Local Self-Government (Nadu, Ur, Sabha), Land Revenue System, Taxation",
      "Chola Art & Architecture: Brihadeshwara Temple (Dravidian Style), Gangaikondacholapuram Temple, Darasuram Temple, Bronze Sculptures (Nataraja)",
      "Cheras & Pandyas: Chera - Trade with Romans (Pepper, Spices), Sangam Literature (Tirukkural), Pandya - Madurai (Capital), Maritime Trade, Patronage of Tamil Literature",
      "Sangam Era (300 BC - 300 AD): Assembly of Poets, Three Sangams, Tholkappiyam (Grammar), Ettuthogai (Eight Anthologies), Pattupattu (Ten Idylls)"
    ]
  },
  // ==================== HISTORY (MEDIEVAL) ====================
  9: {
    title: "History: Delhi Sultanate - Slave & Khalji Dynasties",
    topics: [
      "Slave Dynasty (1206-1290 AD): Qutbuddin Aibak (First Muslim Sultan, Slave of Ghori, Started Qutub Minar, 'Lakh Bakhsh'), Iltutmish (Real Consolidator, Ilbari Turks, Iqtadari System, Coinage - Silver Tanka), Raziya Sultan (First Woman Ruler, Deposed), Balban (Blood & Iron Policy, Persian Influence, Theory of Kingship)",
      "Khalji Dynasty (1290-1320 AD): Jalaluddin Khalji (First Khalji Sultan, Liberal), Alauddin Khalji (1296-1316) - Malwa, Gujarat, Rajasthan, Deccan (Malik Kafur), Repulsed Mongols (Zafar Khan)",
      "Alauddin's Market Control: Diwan-i-Riyasat - Price Control of 4 Markets (Grain, Cloth, Slaves, Horses), Strict Punishments, State Stockpiling",
      "Alauddin's Administrative Reforms: Land Revenue (Kharaj - 50% of Produce), Khalisa Lands (State Land), Permanent Army (Standing Force), Introspection System (Spies)",
      "Art & Architecture: Qutub Minar (Completed), Alai Darwaza (True Arch & Dome), Quwwat-ul-Islam Mosque, Siri Fort (New Capital)",
      "Literature: Amir Khusrau (Nightingale of India) - Court poet of Alauddin, Inventor of Sitar & Tabla, Ziauddin Barani - Tarikh-i-Firozshahi"
    ]
  },
  10: {
    title: "History: Delhi Sultanate - Tughlaq, Sayyid & Lodi",
    topics: [
      "Tughlaq Dynasty (1320-1414 AD): Ghiyasuddin Tughlaq (Killed Khusrau Khan), Muhammad bin Tughlaq (1325-1351) - 5 Major Projects (Capital Shift - Devagiri to Daulatabad, Token Currency, Tax Increase, Khurasan Expedition, Qarachil Expedition), Firoz Tughlaq (1351-1388) - Welfarism (Hospitals, Irrigation Canals, Construction of Schools & Mosques), Abolished Taxes (Zakat, Kharaj), Brought Slavery (Firozabad)",
      "Sayyid Dynasty (1414-1451): Khizr Khan (Governor of Timur), Mubarak Shah, Muhammad Shah (Invasion of Malwa & Gujarat)",
      "Lodi Dynasty (1451-1526): Bahlul Lodi, Sikandar Lodi (Founded Agra, Encouraged Agriculture), Ibrahim Lodi (Last Lodi, Killed in First Battle of Panipat - 1526)",
      "Administration: Iqta System (Land Assignment to Officials), Revenue (Kharaj, Zakat, Jizya, Khums), Judicial System (Qazi, Mufti), Police (Amir-i-Dad)",
      "Art & Architecture: Tughlaqabad Fort (Ghiyasuddin), Firoz Shah Kotla (Firoz), Lodi Gardens, Tomb of Sikandar Lodi",
      "Bhakti & Sufi Movement: Chishti Silsila (Ajmer, Khwaja Moinuddin, Nizamuddin Auliya), Suhrawardi, Qadiri, Naqshbandi, Bhakti Saints - Ramanuja, Kabir (Nirgun - Dohas), Guru Nanak (Sikhism), Namdev (Pandharpur), Mirabai (Krishna Bhakti)"
    ]
  },
  11: {
    title: "History: Mughal Empire (Babur to Akbar)",
    topics: [
      "Babur (1526-1530): First Battle of Panipat (1526) - Defeated Ibrahim Lodi, Battle of Khanwa (1527) - Defeated Rana Sanga, Battle of Chanderi (1528) - Defeated Medini Rai, Baburnama (Tuzuk-i-Baburi - Autobiography in Turki)",
      "Humayun (1530-1540, 1555-1556): 2 Reigns, Defeated by Sher Shah Suri (Battle of Chausa - 1539, Kannauj - 1540), Exile in Persia, Received Help from Shah Tahmasp",
      "Sher Shah Suri (Sur Dynasty - 1540-1545): Administrative Reforms - Land Revenue (Raiyatwari System), Patwari System, Coinage (Rupiya), GT Road (Peshawar to Calcutta), Postal System, Cabinet of 4 Ministers (Wazir, Diwan, Mir Bakhshi, Sadar-us-Sudur)",
      "Akbar (1556-1605): Second Battle of Panipat (1556) - Defeated Hemu (Vikramaditya) with Bairam Khan, Regency of Bairam Khan, Expansion - Malwa, Rajasthan (Rajput Policy), Gujarat, Bengal, Kashmir, Sindh, Deccan",
      "Akbar's Rajput Policy: Alliances with Rajputs (Amber - Bhagwant Das, Jodhabai), Marriages, Rajputs as Mansabdars, Treatment as Allies, Not Subjects",
      "Akbar's Policies: Ibadat Khana (House of Worship - Fatehpur Sikri), Din-i-Ilahi (Divine Faith - 1582), Sulh-i-Kul (Peace with All), Nine Gems (Navaratnas - Birbal, Tansen, Todarmal, Abul Fazl, Faizi)",
      "Mansabdari System: Ranking System (Zat & Sawar), 33 Ranks, Military Obligations, Payment (Cash & Jagir), Monarchy Center of Power"
    ]
  },
  12: {
    title: "History: Mughal Empire (Jahangir to Aurangzeb)",
    topics: [
      "Jahangir (1605-1627): Nur Jahan (Jahangiri - Power Behind the Throne), Conflicts with Sikhs (Guru Arjan Dev Execution), English Embassy (Sir Thomas Roe - 1615), Italian Engravings, Captured Kangra Fort, Painting (Mughal Miniature)",
      "Shah Jahan (1628-1658): Golden Age of Mughal Architecture - Taj Mahal (1632-1653 - In Memory of Mumtaz Mahal), Red Fort (Delhi), Jama Masjid (Delhi), Moti Masjid (Agra), Peacock Throne (Lost to Nadir Shah)",
      "Shah Jahan's Rule: Deccan Campaigns (Bijapur, Golconda), War with Portuguese (Hooghly), Kandahar Issue (Safavids), Famine in Gujarat",
      "Aurangzeb (1658-1707): 49 Years Rule, Deccan Policy (Bijapur - 1686, Golconda - 1687), Jizya Restored (1979), Temple Destruction, Anti-Sikh Policy (9th Guru Tegh Bahadur - Executed), Anti-Maratha Policy, Mughal Decline Began",
      "Mughal Administration: Central (Wazir, Diwan, Mir Bakhshi, Sadar, Qazi), Provincial (Subedar, Diwan, Faujdar), Local (Zamindars), Revenue (Zabt - Dahsala System by Todarmal), Land Classification (Polaj, Parauti, Chachar, Banjar)",
      "Mughal Art & Architecture: Fatehpur Sikri, Buland Darwaza, Jami Masjid, Diwan-i-Aam, Diwan-i-Khas, Pietra Dura (Inlay Work), Mughal Gardens (Shalimar Bagh)",
      "Mughal Literature: Akbarnama (Abul Fazl), Ain-i-Akbari, Tuzuk-i-Jahangiri (Jahangir's Memoirs), Humayunnama (Gulbadan Begum), Shah Jahan's History (Muhammad Salih), Aurangzeb's Fatwa-e-Alamgiri"
    ]
  },
  13: {
    title: "History: Decline of Mughals & Rise of Marathas",
    topics: [
      "Decline of Mughals: Weak Successors (Bahadur Shah I, Jahandar Shah, Farrukhsiyar), Nobility's Power, Wars of Succession, Aurangzeb's Policies, Rise of Regional Powers (Marathas, Sikhs, Rajputs, Awadh, Hyderabad, Bengal)",
      "Nadir Shah's Invasion (1739): Sack of Delhi, Peacock Throne & Kohinoor Diamond Taken, Mughal Prestige Destroyed",
      "Maratha Empire: Shivaji (1627-1680) - Foundation of Swarajya in Western Maharashtra, Administration (Ashtapradhan), Military (Guerilla Warfare), Coronation (1674 at Raigad)",
      "Maratha Administration: Ashtapradhan (Peshwa - Prime Minister, Senapati - Commander, Amatya - Finance, Mantri - Foreign Affairs, Sachiv - Secretary, Nyayadhish - Justice, Pandit Rao - Religious Affairs, Sari Naubat - Military), Revenue (Sardeshmukhi, Chauth)",
      "Peshwa Period (1713-1761): Balaji Vishwanath (First Peshwa, Grant of Chauth & Sardeshmukhi), Baji Rao I (Expansion - Gujarat, Malwa, Bundelkhand, Nizam's Territories), Balaji Baji Rao (Third Battle of Panipat - 1761 - Defeat by Ahmad Shah Abdali)",
      "Anglo-Maratha Wars: 1st (1775-1782) - British Defeat, 2nd (1803-1805) - British Victory, 3rd (1817-1818) - End of Maratha Empire, British Annexation",
      "Maratha Confederacy: Peshwa (Pune), Gaekwad (Baroda), Bhonsle (Nagpur), Holkar (Indore), Scindia (Gwalior)"
    ]
  },
  14: {
    title: "History: Vijayanagara, Bahmani & Advent of Europeans",
    topics: [
      "Vijayanagara Empire (1336-1646): Harihara & Bukka (Founders - Sangama Dynasty), Capital - Vijayanagara (Hampi), Conflicts with Bahmani Sultanate",
      "Krishna Deva Raya (1509-1529) - Tuluva Dynasty, Golden Age, Patron of Literature (Amuktamalyada - Telugu), Economy (Portuguese Trade), Architecture (Vitthala Temple - Stone Chariot, Hazara Rama Temple)",
      "Battle of Talikota (1565): Defeat of Vijayanagara by Deccan Sultanates (Bijapur, Golconda, Ahmadnagar, Bidar, Berar), Rama Raya Defeated, Empire Disintegrated",
      "Bahmani Sultanate (1347-1527): Alauddin Bahman Shah (Founder), Mahmud Gawan (Prime Minister - Administrative Reforms), Capital - Gulbarga (Then Bidar)",
      "Deccan Sultanates: Bijapur (Adil Shahi), Golconda (Qutb Shahi), Ahmadnagar (Nizam Shahi), Berar (Imad Shahi), Bidar (Barid Shahi)",
      "Advent of Europeans: Portuguese (Vasco da Gama - 1498 Calicut, Albuquerque - Goa 1510, Blue Water Policy), Dutch (Pulicat, Chinsura), English (East India Company - 1600, Captain William Hawkins - 1608, Sir Thomas Roe - 1615), French (Pondicherry - 1674)",
      "Anglo-French Rivalry: Carnatic Wars - 1st (1746-48), 2nd (1749-54), 3rd (1756-63), British Victory, French Decline (Treaty of Paris - 1763)"
    ]
  },
  // ==================== HISTORY (MODERN) ====================
  15: {
    title: "Modern History: British Expansion - Part 1",
    topics: [
      "Battle of Plassey (1757): Siraj-ud-Daulah vs Clive (Mir Jafar Traitor), British Victory, Diwani Rights over Bengal, Bihar, Odisha (1765 - Treaty of Allahabad)",
      "Battle of Buxar (1764): Mir Qasim, Shuja-ud-Daulah (Awadh), Shah Alam II (Mughal) vs Munro (British), British Victory, Diwani Rights Granted to EIC",
      "Anglo-Mysore Wars: 1st (1767-69) - Hyder Ali vs British (Treaty of Madras), 2nd (1780-84) - Hyder Ali defeated British, Treaty of Mangalore, 3rd (1790-92) - Tipu Sultan Defeated (Treaty of Seringapatam), 4th (1799) - Tipu Killed (Defence of Srirangapatna)",
      "Anglo-Maratha Wars: 1st (1775-82) - Treaty of Salbai, 2nd (1803-05) - Treaty of Deogaon & Surji-Arjungaon, 3rd (1817-18) - Complete Annexation",
      "Anglo-Sikh Wars: 1st (1845-46) - Treaty of Lahore, 2nd (1848-49) - Complete Annexation of Punjab",
      "Doctrine of Lapse (Lord Dalhousie - 1848-56): Annexation of Satara (1848), Jhansi (1853), Nagpur (1854), Awadh (1856)",
      "Subsidiary Alliance (Lord Wellesley - 1798-1805): Hyderabad, Mysore, Awadh, Peshwa (Baji Rao II), Princely States Lost Sovereignty",
      "Policy of Paramountcy (Lord Dalhousie): Doctrine of Lapse, Other Annexations, British Supremacy Established"
    ]
  },
  16: {
    title: "Modern History: Revolt of 1857",
    topics: [
      "Causes of Revolt: Military (Enfield Rifles - Greased Cartridges, General Service Enlistment Act, Lighter Armies), Economic (Land Revenue, Zamindari System, Indian Industry Destruction, Drain of Wealth), Religious & Social (Missionaries, Sati Abolition, Widow Remarriage, Sanskrit Colleges), Administrative (Doctrine of Lapse, Subsidiary Alliance)",
      "Leaders: Nana Sahib (Kanpur - 1857), Kunwar Singh (Bihar - Jagdishpur), Rani Lakshmibai (Jhansi - 1857-58), Bahadur Shah Zafar (Delhi - Symbolic Leader), Tantya Tope (Gwalior - 1858), Maulvi Ahmadullah Shah (Awadh - Faizabad)",
      "Suppression: British Recaptured Delhi (Sept 1857), Kanpur, Lucknow, Jhansi, Gwalior (June 1858), Bahadur Shah Captured & Exiled to Rangoon",
      "Consequences: Government of India Act 1858 (End of EIC, Crown Rule), Queen's Proclamation (Assurances - No Annexation, Respect for Indian Princes, Religious Freedom), India under Secretary of State for India (Lord Stanley)",
      "Administrative Changes: Reorganization of Army (More British, Less Indians), Policy of Divide and Rule, Created Legislative Councils (Indian Councils Act 1861), Rise of Nationalism"
    ]
  },
  17: {
    title: "Modern History: Socio-Religious Reform Movements - Part 1",
    topics: [
      "Brahmo Samaj (1828): Raja Ram Mohan Roy (Social Reformer - Sati Abolition 1829, Widow Remarriage, Women's Education, Rationalism), Keshab Chandra Sen (Brahmo Samaj of India), Debendranath Tagore (Tattvabodhini Sabha), Prarthana Samaj (Bombay)",
      "Arya Samaj (1875): Swami Dayanand Saraswati ('Go Back to Vedas'), Satyarth Prakash (Light of Truth), Shuddhi Movement (Reconversion), Vedic Schools, Social Reforms (Against Idolatry, Caste System, Child Marriage)",
      "Ramakrishna Mission (1897): Swami Vivekananda (Narendranath Datta), Universal Tolerance, Vedantic Philosophy, Sister Nivedita, Belur Math, Chicago Parliament of Religions (1893)",
      "Theosophical Society (1875): Madam Blavatsky, Colonel Olcott, Annie Besant (Founded in India - 1882), Hindu Philosophy Revival, Promotion of Indian Culture, Self-Government Movement",
      "Aligarh Movement (1875): Sir Syed Ahmed Khan, Muhammadan Anglo-Oriental College (Aligarh), Modern Education for Muslims, Separate Electorates, 2-Nation Theory, Indian National Congress Critique"
    ]
  },
  18: {
    title: "Modern History: Socio-Religious Reform Movements - Part 2",
    topics: [
      "Young Bengal Movement (1826-1831): Henry Louis Vivian Derozio (Hindu College, Calcutta), Reason & Questioning, Against Superstition, English Rationalism, Early Nationalist Ideas",
      "Satyashodhak Samaj (1873): Jyotiba Phule (Maharashtra), Anti-Caste Movement, Women's Education, Truth-Seeking Society, 'Gulamgiri' (Book), First School for Untouchables (1854)",
      "Self-Respect Movement (1925): E.V. Ramasamy 'Periyar' (Tamil Nadu), Rationalism, Dravidian Identity, Against Brahminical Supremacy, Women's Equality, Inter-Caste Marriages",
      "Other Movements: Wahabi Movement (Walullah - Delhi), Faraizi Movement (Haji Shariatullah - Bengal), Deoband Movement (Darul Uloom - 1866, Maulana Qasim Nanautawi), Singh Sabha Movement (Punjab)",
      "Impact of Reforms: Rise of National Consciousness, Social Equality Awareness, Women's Education & Rights, Religious Revival, Critique of Colonial Policies"
    ]
  },
  19: {
    title: "Modern History: Indian National Movement (1885-1905)",
    topics: [
      "Formation of INC (1885): A.O. Hume (Retired Civil Servant), Womesh Chandra Bonnerjee (First President - 1885 Bombay), 72 Delegates, Loyalty to Crown (Hume's Staunch British Loyalist)",
      "Moderate Phase (1885-1905): Dadabhai Naoroji (Grand Old Man of India - 'Drain of Wealth Theory' - Poverty and Un-British Rule in India), Gokhale (Political Guru of Gandhi - Servants of India Society), Ranade, Pherozeshah Mehta, Surendranath Banerjee",
      "Economic Critique: Drain of Wealth Theory (Un-British Rule in India - 1901), Poverty in India, British Exploitation, National Income Estimates",
      "Political Demands: Indianization of Civil Services, Repeal of Arms Act, Reduction of Military Expenditure, Local Self-Government, Expansion of Legislative Councils",
      "Methods: Petitions, Resolutions, Appeals to British Government, Constitutional Agitation, Journalism (The Hindu, Amrita Bazar Patrika)",
      "Limitations: Elite Character, Lack of Mass Base, Limited Success, British Officially Opposed to Self-Government for India"
    ]
  },
  20: {
    title: "Modern History: Indian National Movement (1905-1919)",
    topics: [
      "Partition of Bengal (1905): Lord Curzon (Bengal Partition - Western (Bengal) & Eastern (Assam)), Swadeshi Movement (Boycott of Foreign Goods, National Education, Swadeshi Industries), Anti-Partition Movement - Surat & Calcutta",
      "Extremist Phase (1905-1919): Lal-Bal-Pal (Lala Lajpat Rai - Punjab Kesari, Bal Gangadhar Tilak - 'Swaraj is my birthright', Bipin Chandra Pal - Bombay), Aurobindo Ghosh (Bande Mataram), Extremist Methods (Boycott, Swadeshi, National Education, Passive Resistance)",
      "Surat Split (1907): INC Split - Moderates (Gokhale) vs Extremists (Tilak), 'Minto-Morley Reforms' (1909) - Separate Electorates for Muslims, Indian Councils Act 1909",
      "Gadar Movement (1913): Sikhs in USA/Canada, Lala Hardayal, Sohan Singh Bhakna, Komagata Maru Incident (1914) - 376 Indians Returned to India, Ghadar Mutiny (1915) - Bengal",
      "Home Rule Movement (1916): Bal Gangadhar Tilak (Indian Home Rule League - April 1916), Annie Besant (Theosophical Society - All India Home Rule League - Sept 1916), Lucknow Pact (1916) - Congress & Muslim League Unity, Demand for Self-Government",
      "Montagu Declaration (1917): British Government for Responsible Government in India, Montagu-Chelmsford Reforms (1919) - Dyarchy (Provincial), 1919 Government of India Act"
    ]
  },
  21: {
    title: "Modern History: Gandhi Era (1919-1930)",
    topics: [
      "Rowlatt Act (1919): 'Black Act' - Extension of War-time Restrictions, Satyagraha Against Rowlatt Act (April 1919), Jallianwala Bagh Massacre (April 13, 1919 - Amritsar) - Gen. Dyer, Hunter Commission",
      "Non-Cooperation Movement (1920-1922): Causes (Khilafat Movement - Maulana Muhammad Ali, Shaukat Ali), Methods (Surrender of Titles, Boycott of Courts, Educational Institutions, Legislative Councils, Foreign Goods), Chauri Chaura Incident (Feb 1922) - 22 Police Killed, Gandhi Called Off Movement",
      "Simon Commission (1927): All-British Commission, 'No Indians in India', Lala Lajpat Rai Lathi Charge (Nov 1928), Nehru Report (1928) - Dominion Status Demand, Jinnah's 14 Points (1929)",
      "Lahore Session (1929): Purna Swaraj Declaration (Complete Independence) - Jawaharlal Nehru as President, Civil Disobedience Movement Planned",
      "Salt Satyagraha (1930): Dandi March (March 12 - April 6, 1930 - 240 miles, 79 Participants), Salt Law Violation, Nationwide Civil Disobedience, Thousands Arrested",
      "Round Table Conferences: 1st (1930) - Congress Boycott, 2nd (1931) - Gandhi-Lord Irwin (Gandhi-Irwin Pact), Gandhi Attended, 3rd (1932) - Congress Boycott",
      "Government of India Act 1935: Provincial Autonomy, Dyarchy at Centre (Not Implemented), Federation (Not Implemented), Separation of Burma from India"
    ]
  },
  22: {
    title: "Modern History: Gandhi Era (1930-1947)",
    topics: [
      "Quit India Movement (1942): 'Do or Die' (Gandhi - Aug 8, 1942), 'Bharat Chhodo Andolan', Massive Arrests (Gandhi, Nehru, Patel), Violent Repression, Underground Activities (Ram Manohar Lohia, J.P. Narayan), Government Suppressed by 1944",
      "Indian National Army (INA): Subhash Chandra Bose (Netaji - Greater East Asia Conference - Tokyo 1943), Provisional Government (Azad Hind Government - Singapore), Indian National Army (INA - Rani Jhansi Regiment), Imphal & Kohima Campaigns, INA Trials (Red Fort - 1945), 'Give me blood and I will give you freedom'",
      "Cabinet Mission (1946): Plan for India's Independence, Rejection of Demand for Pakistan, 3-Tier Structure (Union, Provinces, Groups), Congress Accepted, Muslim League Rejected, Direct Action Day (Aug 16, 1946 - Calcutta)",
      "Mountbatten Plan (June 1947): Partition of India (India & Pakistan), 2 Nations, Princely States to Decide, Boundary Commission (Radcliffe Award), Redcliffe Line",
      "Indian Independence Act 1947: 15th August 1947, End of British Rule, Transfer of Power to 2 Dominions, Lord Mountbatten as First Governor-General of India, Muhammad Ali Jinnah as Governor-General of Pakistan",
      "Integration of Princely States: Sardar Patel (Iron Man of India) - Accession of Junagadh, Hyderabad (Operation Polo - 1948), Kashmir (Instrument of Accession - 1947)"
    ]
  },
  23: {
    title: "Modern History: Important Personalities & Organizations",
    topics: [
      "Bhagat Singh: HSRA (Hindustan Socialist Republican Association), Saunders Murder, Central Assembly Bombing (1929), Trial, Execution (March 23, 1931), 'Inquilab Zindabad'",
      "Chandrasekhar Azad: HSRA, Jhansi, Daring Sacrifice (Feb 1931 - Alfred Park, Allahabad)",
      "Mangal Pandey: 1857 Revolt (Barrackpore - March 29, 1857), First Freedom Fighter, Execution",
      "Bahadur Shah Zafar: Last Mughal Emperor, Leader of 1857 Revolt, Exiled to Rangoon, Poet, Death (1862)",
      "Dadabhai Naoroji: Grand Old Man of India, Drain of Wealth Theory, First Indian MP in British Parliament, Congress President - 1886, 1893, 1906",
      "Gokhale: Political Guru of Gandhi, Servants of India Society (1905), Moderate Leader, President INC 1905",
      "Tilak: Extremist Leader, 'Swaraj is my birthright', Congress President 1906, 1916, Home Rule League",
      "Lala Lajpat Rai: Punjab Kesari, 'Simon Commission - Lathi Charge on me', Sher-i-Punjab, President INC 1920",
      "Sardar Patel: Iron Man of India, Integration of Princely States, First Deputy PM & Home Minister (1947-50), Gandhi's Lieutenant",
      "Jawaharlal Nehru: First PM (1947-64), Architect of Modern India, Panchsheel, NAM",
      "Dr. B.R. Ambedkar: Father of Indian Constitution, Dalit Movement (Mahad Satyagraha - 1927, Kalaram Temple Entry - 1930), Poona Pact (1932), First Law Minister of India",
      "Maulana Abul Kalam Azad: Freedom Fighter, Educationist, Congress President (1940, 1946), First Education Minister of India"
    ]
  },
  // ==================== INDIAN POLITY ====================
  24: {
    title: "Polity: Constitution, Preamble & Basic Features",
    topics: [
      "Making of Constitution: Constituent Assembly (Cabinet Mission Plan - 1946), First Meeting (Dec 9, 1946 - Sachchidananda Sinha - Interim President), Dr. Rajendra Prasad (President), Committees (Drafting Committee - Dr. B.R. Ambedkar - Chairman), Adopted Nov 26, 1949 (Constitution Day), Implemented Jan 26, 1950",
      "Preamble: 'WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN, SOCIALIST, SECULAR, DEMOCRATIC, REPUBLIC and to secure...', 42nd Amendment (1976 - Socialist, Secular, Integrity), 44th Amendment (1978 - Removed 'Sovereign Socialist Secular Democratic Republic') - Restored",
      "Features of Constitution: Federal System with Unitary Bias, Parliamentary Form of Government, Cabinet System, Independent Judiciary, Fundamental Rights & Duties, Directive Principles, Rigid & Flexible Procedure",
      "Sources of Constitution: UK (Parliamentary System, Cabinet System, Single Citizenship), USA (Fundamental Rights, Judicial Review, Preamble, Independence of Judiciary), Ireland (DPSP), Canada (Federalism - Union Powers), Australia (Concurrent List), USSR (Fundamental Duties)"
    ]
  },
  25: {
    title: "Polity: Union & Citizenship",
    topics: [
      "Union & Its Territory: Articles 1-4, States & Union Territories, State Reorganisation Act 1956, 7th Amendment (1956), Jammu & Kashmir Reorganisation Act 2019, Dadra & Nagar Haveli and Daman & Diu (2020)",
      "Formation of States: Linguistic Basis (Andhra Pradesh - 1953, States Reorganisation 1956), New States (Nagaland - 1963, Haryana - 1966, Himachal - 1971, Goa - 1987, Chhattisgarh - 2000, Jharkhand - 2000, Uttarakhand - 2000, Telangana - 2014)",
      "Citizenship: Articles 5-11, Acquisition (By Birth, Descent, Registration, Naturalisation, Incorporation of Territory), Termination (Renunciation, Termination, Deprivation)",
      "Citizenship Act 1955: Amendments (2003, 2005, 2015, 2019 - CAA), Overseas Citizen of India (OCI), PIO Card Abolished",
      "CAA 2019: Citizenship to Non-Muslim Migrants (Hindu, Sikh, Buddhist, Jain, Parsi, Christian) from Pakistan, Afghanistan, Bangladesh (Before Dec 31, 2014), Protests, Supreme Court Challenge"
    ]
  },
  26: {
    title: "Polity: Fundamental Rights (Articles 14-32)",
    topics: [
      "Fundamental Rights: Articles 14-35, Guaranteed by Constitution, Justiciable (Court Enforcement), Not Absolute (Reasonable Restrictions), Suspension during Emergency (Article 359)",
      "Right to Equality (14-18): Article 14 - Equality before Law, Equal Protection of Laws, Article 15 - Prohibition of Discrimination (Religion, Race, Caste, Sex, Place of Birth), Article 16 - Equality of Opportunity in Public Employment (Reservations), Article 17 - Abolition of Untouchability, Article 18 - Abolition of Titles (Except Military/Academic)",
      "Right to Freedom (19-22): Article 19 - 6 Freedoms (Speech & Expression, Assembly, Association, Movement, Residence, Profession), Article 20 - Protection in Respect of Conviction (Ex-Post Facto, Double Jeopardy, Self-Incrimination), Article 21 - Protection of Life & Personal Liberty (Right to Die? No, Right to Live), Article 21A - Right to Education (86th Amendment - 6-14 Years), Article 22 - Protection against Arrest & Detention",
      "Right against Exploitation (23-24): Article 23 - Prohibition of Human Trafficking & Begar, Article 24 - Prohibition of Child Labour (Below 14 Years)",
      "Right to Freedom of Religion (25-28): Article 25 - Freedom of Conscience & Profession, Article 26 - Freedom to Manage Religious Affairs, Article 27 - Freedom from Taxation for Religion, Article 28 - Freedom from Religious Instruction in State Educational Institutions",
      "Cultural & Educational Rights (29-30): Article 29 - Protection of Minorities' Language, Script, Culture, Article 30 - Right of Minorities to Establish & Administer Educational Institutions",
      "Right to Constitutional Remedies (32): 5 Writs - Habeas Corpus (Produce Body), Mandamus (Command), Certiorari (Quash), Prohibition (Prohibit), Quo-Warranto (By What Authority), Suspension during Emergency (Article 359)"
    ]
  },
  27: {
    title: "Polity: DPSP & Fundamental Duties",
    topics: [
      "Directive Principles of State Policy (DPSP - Articles 36-51): Non-Justiciable, Part IV, Aim at Welfare State, 42nd Amendment (1976 - Added 4 New Principles: Equal Justice, Free Legal Aid, Participation in Management, Protection of Environment)",
      "Socialist Directives: Article 38 - Welfare State, Article 39 - Adequate Means of Livelihood, Equal Pay, Prevention of Concentration of Wealth, Article 39A - Equal Justice & Free Legal Aid, Article 41 - Right to Work, Education, Public Assistance, Article 42 - Just & Humane Conditions of Work, Article 43 - Living Wage, Article 47 - Nutrition & Standard of Living",
      "Gandhian Directives: Article 40 - Panchayati Raj (73rd Amendment), Article 43 - Cottage Industries, Article 46 - Weaker Sections & Scheduled Tribes, Article 48 - Prohibition of Cow Slaughter",
      "Liberal-Intellectual Directives: Article 44 - Uniform Civil Code, Article 45 - Early Childhood Education, Article 48 - Agriculture & Animal Husbandry, Article 49 - Preservation of Monuments, Article 50 - Separation of Judiciary & Executive, Article 51 - International Peace & Security",
      "Difference between FRs & DPSP: Justiciable vs Non-Justiciable, Courts vs Parliament Implementation, Fundamental vs Directive, Individual vs Social Welfare",
      "Fundamental Duties (Article 51A): 11 Duties (42nd Amendment - 1976 - Swaran Singh Committee), Added by 86th Amendment - Right to Education (Article 21A), Enforced by Parliament"
    ]
  },
  28: {
    title: "Polity: Union Legislature (Parliament)",
    topics: [
      "Composition: Lok Sabha (Lower House - House of People) - Max 552 (530 States + 20 UTs + 2 Anglo-Indian [Abolished in 2020]), Term 5 Years, Direct Elections, 543 Currently (From States & UTs), Speaker & Deputy Speaker",
      "Rajya Sabha (Upper House - Council of States) - Max 250 (238 States & UTs + 12 Nominated by President), Term 6 Years (1/3 Retire Every 2 Years), Indirect Election (MLAs), Chairman (Vice President), Deputy Chairman",
      "Qualifications: Article 84 (Lok Sabha - Age 25, Rajya Sabha - Age 30, Registered Voter), Disqualification (Article 102 - Office of Profit, Insolvency, Unsound Mind, Defection - 10th Schedule)",
      "Sessions: 3 Sessions - Budget (Jan-May), Monsoon (Jul-Sep), Winter (Nov-Dec), Summoning (President), Prorogation, Dissolution (Only Lok Sabha), Joint Sitting (President - Article 108)",
      "Procedure of Law Making: Ordinary Bill (Lok Sabha → Rajya Sabha → President), Money Bill (Article 110 - Only Lok Sabha, Rajya Sabha 14 Days, President's Approval), Finance Bill (Article 117 - With Recommendations of President), Constitutional Amendment Bill (Article 368 - Special Majority)",
      "Parliamentary Committees: Public Accounts Committee (PAC - 22 Members - CAG Report), Estimates Committee (30 Members), Committee on Public Undertakings (22 Members), Other Committees (Business Advisory, Standing, Joint, Select)"
    ]
  },
  29: {
    title: "Polity: Union Executive (President, Vice President, PM & Council)",
    topics: [
      "President: Article 52-62, 56 (Term - 5 Years), Election (Article 55 - Electoral College: Elected MPs & MLAs, Voting by Single Transferable Vote, Qualified for Lok Sabha Member), Powers (Executive, Legislative, Veto, Financial, Judicial, Diplomatic, Military, Emergency), Impeachment (Article 61 - Process by Parliament)",
      "Vice President: Article 63-65, Ex-Officio Chairman of Rajya Sabha, Election (Elected by MPs - Lok & Rajya, Indirect), Term - 5 Years, Impeachment (Majority of Rajya Sabha, Not Lok Sabha), Acts as President in Vacancy (Max 6 Months)",
      "Prime Minister: Article 74-78, Appointed by President, Leader of Majority Party in Lok Sabha, Real Executive, Council of Ministers (Cabinet, Ministers of State, Deputy Ministers, Parliamentary Secretaries), Collective Responsibility (Article 75), Individual Responsibility, Cabinet Committees",
      "Council of Ministers: Article 74 - PM & Council of Ministers as Executive, Advises President, Article 77 - Business of Government, Article 78 - Duties of PM, Cabinet Committees (Appointments, Economic Affairs, Political, Security, etc.)"
    ]
  },
  30: {
    title: "Polity: State Executive & Legislature",
    topics: [
      "Governor: Article 153-162, Appointed by President, Nominal Executive, Powers (Executive, Legislative, Financial, Judicial, Discretionary Powers - Article 163, 164, 174, 176, 200, 201), Discretionary Powers (Appointment of CM in Hung Assembly, Dismissal of Ministry, Reservation of Bills for President, Promulgation of Ordinance)",
      "Chief Minister: Article 164, Appointed by Governor, Leader of Majority Party in Vidhan Sabha, Real Executive, Council of Ministers (Collective Responsibility to Vidhan Sabha), Duties (Advises Governor, Coordinates Departments)",
      "State Council of Ministers: Article 164, CM as Head, Council of Ministers (Cabinet, Ministers of State, Deputy Ministers), Collective Responsibility to Vidhan Sabha, Individual Responsibility",
      "Vidhan Sabha (Legislative Assembly): Direct Elections, Term 5 Years, Max Strength 500, Min 60, Speaker & Deputy Speaker, Money Bills Introduced Here",
      "Vidhan Parishad (Legislative Council): Article 169, Created/Abolished by Parliament on State's Request, Max 1/3 of Vidhan Sabha, Min 40, Indirect Election (1/3 by MLAs, 1/3 by Local Bodies, 1/12 by Teachers, 1/12 by Graduates, 1/6 by Governor), Chairman"
    ]
  },
  31: {
    title: "Polity: Judiciary & Local Self-Government",
    topics: [
      "Supreme Court: Article 124-147, 1 Chief Justice + 30 Judges (Sanctioned), Appointment (Collegium System), Qualifications (5 Years Judge of HC / 10 Years Advocate / Distinguished Jurist), Removal (President, Address by Parliament - Majorities), Jurisdiction (Original, Appellate, Advisory, Review, Writ), Judicial Review (Power to Examine Laws), Judicial Activism, PIL (Public Interest Litigation)",
      "High Court: Article 214-231, 25 High Courts in India, Appointment (President in Consultation with CJI & Governor), Qualifications (10 Years Advocate / 10 Years Judicial Service), Powers (Original, Appellate, Writ, Supervisory), Removal (President, Address by Parliament)",
      "District Court: Article 233-235, Lowest Level of Judiciary, Appointed by Governor in Consultation with HC, Original Jurisdiction in Civil & Criminal Cases, Sessions Court for Criminal, Appellate Jurisdiction",
      "Panchayati Raj (73rd Amendment - 1992): Article 243, 3-Tier System (Gram Panchayat, Panchayat Samiti, Zila Parishad), 5-Year Term, Reservations (SCs/STs, Women - 1/3), State Election Commission, State Finance Commission",
      "Municipality (74th Amendment - 1992): Article 243P-243ZG, 3 Types (Nagar Panchayat, Municipal Council, Municipal Corporation), Reservations (SCs/STs, Women - 1/3), 5-Year Term, State Election Commission"
    ]
  },
  32: {
    title: "Polity: Constitutional & Non-Constitutional Bodies",
    topics: [
      "Constitutional Bodies: UPSC (Article 315-323 - Union Public Service Commission), SPSC (State Public Service Commission), Election Commission of India (Article 324 - 3 Members including CEC), Finance Commission (Article 280 - Every 5 Years), CAG (Article 148 - Comptroller & Auditor General of India), Attorney General of India (Article 76 - Legal Advisor), Advocate General of India (Article 165)",
      "Non-Constitutional Bodies: NITI Aayog (Replaced Planning Commission - 2015, National Institution for Transforming India, Prime Minister as Chairman, Governing Council of CMs), NHRC (National Human Rights Commission - 1993, Protection of Human Rights Act), CVC (Central Vigilance Commission - 1964), CIC (Central Information Commission - 2005), Lokpal & Lokayukta (Lokpal - 2013, Lokayukta - State)"
    ]
  },
  33: {
    title: "Polity: Important Amendments & Acts",
    topics: [
      "Major Amendments: 1st (1961 - Abolition of Zamindari, Protection of Land Reforms), 7th (1956 - State Reorganisation), 24th (1971 - Kesavananda Bharati Case - Amendment Power to Parliament), 42nd (1976 - Mini Constitution - Socialist, Secular, Integrity, DPSP, Fundamental Duties), 44th (1978 - Emergency Provisions, Right to Property Removed), 52nd (1985 - Anti-Defection Law - 10th Schedule), 61st (1989 - Voting Age 18), 73rd & 74th (1992 - Panchayati Raj & Municipalities), 86th (2002 - RTE - Article 21A), 101st (2016 - GST), 103rd (2019 - EWS Reservation), 105th (2021 - OBC Reservation), 106th (2023 - Women Reservation in Parliament)",
      "Important Acts: RTI Act 2005 (Right to Information), RTE Act 2009 (Right to Education), MGNREGA Act 2005 (Rural Employment), GST Act 2017 (Goods & Services Tax), CAA 2019 (Citizenship Amendment Act), IPC & CrPC (Basic Concepts - Indian Penal Code & Criminal Procedure Code)"
    ]
  },
  // ==================== GEOGRAPHY ====================
  34: {
    title: "Geography: Universe, Solar System & Earth",
    topics: [
      "Universe: Big Bang Theory (13.8 Billion Years), Galaxies (Milky Way - Akash Ganga), Stars (Nebulae, Black Holes, Quasars), Astronomical Units (Light Year - 9.46 Trillion KM, Parsec - 3.26 Light Years)",
      "Solar System: 8 Planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune - My Very Educated Mother Just Served Us Noodles), Dwarf Planets (Pluto, Ceres, Eris, Makemake, Haumea), Asteroids (Asteroid Belt - Between Mars & Jupiter), Meteors (Shooting Stars), Comets (Halley's Comet - 76 Years), Sun (Composition - Hydrogen 73%, Helium 25%, Energy - Nuclear Fusion), Gravitational Force of Sun (99.86%)",
      "Earth: Shape (Oblate Spheroid - Bulging at Equator, Flat at Poles), Coordinates (Latitude - Parallels, Longitude - Meridians), Equator (0°), Tropic of Cancer (23.5° N), Tropic of Capricorn (23.5° S), Arctic Circle (66.5° N), Antarctic Circle (66.5° S), International Date Line (180° Meridian), Prime Meridian (0° - Greenwich)",
      "Rotation & Revolution: Rotation (24 Hours - Day & Night, Coriolis Force), Revolution (365.25 Days - Seasons, Year, Leap Year), Solstices (Summer - June 21, Winter - December 22), Equinoxes (March 21, September 23 - Equal Day & Night), Eclipses (Solar - Moon between Sun & Earth, Lunar - Earth between Sun & Moon)"
    ]
  },
  35: {
    title: "Geography: Lithosphere (Interior, Rocks, Landforms)",
    topics: [
      "Interior of Earth: Crust (0-35 KM - Silica, Aluminium, Magnesium - SIAL, SIMA), Mantle (35-2900 KM - Peridotite, Asthenosphere), Core (Outer Core - 2900-5150 KM - Liquid Iron-Nickel, Inner Core - 5150-6371 KM - Solid Iron-Nickel), Mohorovicic Discontinuity (Between Crust & Mantle), Convection Currents (Mantle)",
      "Rocks: Igneous (Volcanic - Granite, Basalt, Gabbro), Sedimentary (Layered - Sandstone, Limestone, Shale, Conglomerate), Metamorphic (Changed - Marble, Slate, Schist, Gneiss, Quartzite)",
      "Continental Drift Theory: Alfred Wegener (1912), Pangea (Supercontinent), Panthalassa (Ocean), Evidence (Fossils, Glacial, Fit of Continents), Limitations (Force Deficiency)",
      "Plate Tectonics: Lithospheric Plates (7 Major - Pacific, North American, Eurasian, African, South American, Indo-Australian, Antarctic), Divergent (Constructive - Mid-Atlantic Ridge), Convergent (Destructive - Himalayan Mountains), Transform (Conservative - San Andreas Fault)",
      "Earthquakes & Volcanoes: Focus (Hypocenter) & Epicenter, Seismic Waves (P, S, L), Mercalli & Richter Scale, Types of Volcanoes (Active, Dormant, Extinct - Vesuvius, Krakatoa, Fuji), Shield Volcano (Hawaii), Composite/Stratovolcano (Fuji)",
      "Mountains: Fold Mountains (Himalayas, Rockies, Andes, Alps), Block Mountains (Vosges, Black Forest, Salt Range), Volcanic Mountains (Mauna Loa, Fuji), Residual Mountains (Nilgiris, Parasnath)",
      "Plains & Plateaus: Erosional Plains (Peneplains), Depositional Plains (Alluvial - Indo-Gangetic), Intermontane Plateaus (Tibetan Plateau), Piedmont Plateaus (Karnataka Plateau), Continental Plateaus (South African Plateau)"
    ]
  },
  36: {
    title: "Geography: Atmosphere & Climate",
    topics: [
      "Atmosphere: Composition (Nitrogen - 78%, Oxygen - 21%, Argon - 0.93%, CO2 - 0.04%, Others), Layers (Troposphere - 0-15 KM - Weather, Stratosphere - 15-50 KM - Ozone Layer, Mesosphere - 50-85 KM, Thermosphere - 85-600 KM, Exosphere - >600 KM)",
      "Insolation & Temperature: Heat Budget (Incoming Shortwave, Outgoing Longwave), Albedo (Reflection - Snow 90%, Fresh Soil 40%, Sea 5%), Factors (Latitude, Altitude, Ocean Currents, Distance from Sea)",
      "Pressure Belts: Equatorial Low (0°), Subtropical High (30° N & S), Subpolar Low (60° N & S), Polar High (90° N & S), Seasonal Shifting, Atmospheric Circulation (Hadley, Ferrel, Polar Cells)",
      "Winds: Planetary (Trade Winds - NE & SE, Westerlies, Easterlies - Polar), Periodic (Monsoon - Seasonal), Local (Land & Sea Breeze, Mountain & Valley Breeze, Loo - Hot Dusty Wind in North India, Mistral - Cold Wind in France, Chinook - Warm Wind in Rockies)",
      "Monsoon Mechanism: Thermal Concept (Land vs Sea Heating), Dynamic Concept (ITCZ - Inter Tropical Convergence Zone), Jet Streams (Upper Air Westerlies), Indian Monsoon (South-West Monsoon - June to Sept, North-East Monsoon - Oct to Dec), ENSO (El Nino Southern Oscillation)",
      "Cyclones: Tropical (Hurricanes, Cyclones, Typhoons - Low Pressure, Eye, Spiraling), Temperate (Extratropical - Fronts), Anticyclones (High Pressure, Calm, Clear Weather)",
      "Humidity, Clouds & Precipitation: Humidity (Absolute, Relative, Saturation), Clouds (Cirrus - High, Cumulus - Mid, Stratus - Low, Nimbostratus - Rain), Precipitation (Rain, Snow, Hail, Sleet), Types of Rainfall (Orographic - Relief, Convectional - Heating, Cyclonic - Fronts)"
    ]
  },
  37: {
    title: "Geography: Hydrosphere, Physical Geography of India & Rivers",
    topics: [
      "Hydrosphere: Ocean Relief (Continental Shelf - 200 M, Continental Slope, Abyssal Plain - Deep Ocean Floor, Trenches - Deepest, Mid-Ocean Ridges - Divergent Boundaries), Ocean Currents (Warm - Gulf Stream, Kuroshio, Agulhas, North Atlantic Drift, Cold - Labrador, Oyashio, Benguela, West Wind Drift), Tides (High/Low, Spring - New/Full Moon, Neap - 1st/3rd Quarter), Salinity (Max - Red Sea 40%, Min - Baltic Sea 7%, Indian Ocean ~35%)",
      "Indian Physical Geography: Location (8°4' N to 37°6' N, 68°7' E to 97°25' E), Extent (3214 KM North-South, 2933 KM East-West), Border Countries (Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar, Bangladesh), Coastline (7516.6 KM), Time Zone (IST - 82.5° E)",
      "Rock System: Archaean (Peninsular Plateau - Granite, Gneiss, Schist), Dharwar (Karnataka - Iron Ore, Manganese), Cuddapah (Andhra - Limestone, Asbestos), Vindhyan (Vindhya Range - Sandstone, Limestone), Gondwana (Coal Fields - Jharkhand, Odisha), Tertiary (Himalayas - Alluvial Deposits)",
      "Northern Mountains: Trans-Himalayas (Karakoram - K2, Ladakh, Zanskar), Greater Himalayas (Himadri - Mt. Everest, Kanchenjunga, Nanda Devi), Lesser Himalayas (Himachal - Pir Panjal, Dhauladhar, Mussoorie), Shivalik (Outer Himalayas - 600-1500 M), Passes (Khyber, Nathu La, Bolan, Shipki La, Jelep La)",
      "Northern Plains: Indo-Gangetic-Brahmaputra Plain, Doabs (Between Rivers), Bhabar (Pebble Zone), Terai (Marshy, Forest), Bhangar (Older Alluvium), Khadar (Newer Alluvium)",
      "Peninsular Plateau: Malwa Plateau (Gujarat, Rajasthan, MP), Deccan Plateau (Maharashtra, Karnataka, Telangana, Andhra), Chotanagpur Plateau (Jharkhand, Chhattisgarh), Western Ghats (Sahyadri - Highest - Anamudi), Eastern Ghats (Mahendragiri, Javadi, Shevaroy, Nilgiri)",
      "Coastal Plains: Western Coast (Gujarat, Konkan, Kannad, Malabar), Eastern Coast (Northern Circars, Coromandel), Thar Desert (Rajasthan - Hot Desert, Luni River, Indira Gandhi Canal), Islands (Andaman & Nicobar - 572 Islands, Lakshadweep - 36 Islands)",
      "River Systems: Himalayan - Indus System (Jhelum, Chenab, Ravi, Beas, Sutlej), Ganga System (Yamuna, Ghaghra, Son, Kosi), Brahmaputra System (Tsangpo, Dihang, Subansiri), Peninsular - Godavari (Dakshin Ganga), Krishna, Mahanadi, Narmada, Tapi, Cauvery, West & East Flowing (Narmada-Tapi vs Godavari-Krishna-Cauvery), Major Dams (Bhakra Nangal, Hirakud, Nagarjunsagar, Tehri), Waterfalls (Jog - Highest, Chitrakoot, Dudhsagar)"
    ]
  },
  38: {
    title: "Geography: Indian Climate, Soils & Vegetation",
    topics: [
      "Climate of India: Monsoon Climate (South-West - June to Sept, North-East - Oct to Dec), Seasons (Winter - Jan-Feb, Summer - Mar-May, Rainy - June-Sept, Retreating Monsoon - Oct-Nov), Climatic Regions (Mountain, Tropical Rainforest, Tropical Monsoon, Tropical Dry, Desert, Semi-Arid), Monsoon Mechanism (ITCZ, Jet Streams, Somali Current, Indian Ocean Dipole - IOD), El Nino (Dry India), La Nina (Wet India)",
      "Soils of India: Alluvial (44% - Khadar & Bhangar - Most Fertile - Northern Plains), Black (Regur - 6% - Cotton Soil - Maharashtra, Gujarat, MP - 'Self Ploughing'), Red (28% - Southern Plateau - Poor in Nitrogen & Phosphorus), Laterite (8% - Western Ghats - Leached Soil), Desert (Thar - Rajasthan - Sandy), Mountain (Himalayas - Forest Soil), Saline (Coastal Areas), Soil Conservation (Contour Ploughing, Afforestation, Mulching)",
      "Natural Vegetation & Forests: Tropical Rainforests (Western Ghats, NE - Evergreen), Tropical Deciduous (Monsoon Forests - Teak, Sal - 65% of Forest Area), Thorn Forests (Rajasthan, Gujarat - Scrub Vegetation), Mangrove Forests (Sundarbans - Sundari Trees), Montane Forests (Himalayas - Coniferous), National Parks (Corbett - Tiger, Kanha - Tiger, Kaziranga - Rhino, Periyar - Elephant, Sundarbans - Tiger), Wildlife Sanctuaries (Gir - Lion, Kaziranga - Rhino), Project Tiger (1973 - 52 Tiger Reserves), Project Elephant (1992), Biosphere Reserves (Nilgiri, Sundarbans, Nanda Devi, Gulf of Mannar - 18 Total)"
    ]
  },
  39: {
    title: "Geography: World Geography (Continents, Mountains, Rivers, etc.)",
    topics: [
      "Continents & Oceans: 7 Continents (Asia - Largest, Africa, North America, South America, Antarctica, Europe, Australia - Smallest), 5 Oceans (Pacific - Largest & Deepest, Atlantic, Indian, Southern, Arctic - Smallest & Shallowest)",
      "Major Mountain Ranges: Rockies (North America), Andes (South America - Longest), Himalayas (Asia - Highest), Alps (Europe), Urals (Europe-Asia Boundary), Atlas (Africa), Great Dividing Range (Australia)",
      "Major Rivers: Nile (Africa - Longest), Amazon (South America - Largest Volume), Mississippi (North America), Yangtze (Asia), Congo (Africa), Murray-Darling (Australia), Danube (Europe - 10 Countries), Rhine (Europe), Volga (Europe - Longest in Europe)",
      "Major Deserts: Sahara (Africa - Largest Hot), Gobi (Asia - Cold), Kalahari (Africa), Atacama (South America - Driest), Thar (Asia - India), Great Victorian (Australia), Sonoran (North America)",
      "Important Straits: Bering (Asia-North America), Malacca (Malay Peninsula - Sumatra), Gibraltar (Europe-Africa), Suez (Africa-Asia - Man-made), Palk (India-Sri Lanka), Dover (England-France), Bab-el-Mandeb (Asia-Africa), Hormuz (Persian Gulf - Oil Route), Davis (Canada-Greenland), Magellan (South America - Chile), Bass (Australia-Tasmania)",
      "Important Canals: Suez Canal (Egypt - 1869 - Red Sea to Mediterranean), Panama Canal (Panama - 1914 - Pacific to Atlantic), Kiel Canal (Germany - Baltic to North Sea)",
      "Major Lakes: Caspian (Largest - Asia-Europe), Superior (Largest Freshwater - USA-Canada), Victoria (Africa - 2nd Largest Freshwater), Baikal (Deepest - Siberia - 1637 M), Titicaca (Highest Navigable - South America), Dead Sea (Lowest - Asia), Great Bear (Canada), Lake Baikal (Russia - 22% of World's Freshwater), Lake Michigan (USA)",
      "Major Grasslands: Prairies (North America - 'Granary of World'), Pampas (South America - Cattle), Steppes (Eurasia - Wheat), Savanna (Africa - Equatorial - 'Velds' - South Africa), Downs (Australia), Canterbury Plains (New Zealand)"
    ]
  },
  // ==================== INDIAN ECONOMY ====================
  40: {
    title: "Economy: Basic Concepts, Sectors & National Income",
    topics: [
      "Basic Concepts: GDP (Gross Domestic Product - Value of All Goods & Services Produced in India), GNP (Gross National Product - GDP + Net Income from Abroad), NDP (Net Domestic Product - GDP - Depreciation), NNP (Net National Product - GNP - Depreciation), Per Capita Income (NNI/Population), Disposable Income (Income After Taxes)",
      "National Income: Methods of Calculation (Product Method, Income Method, Expenditure Method), CSO (Central Statistical Office) - NSO (National Statistical Office), Base Year (2011-12), India's GDP (2023-24 - ~₹298 Trillion, ~$3.73 Trillion), Growth Rate (FY 2023-24 - 8.2%), India - 5th Largest Economy (2023 - Surpassed UK)",
      "Inflation: WPI (Wholesale Price Index - Base 2011-12 - 697 Items), CPI (Consumer Price Index - Base 2012 - Retail Prices - Food, Fuel, Housing - 4 Categories: Rural, Urban, Combined, Workers), PPI (Producer Price Index), Headline vs Core Inflation, Demand-Pull vs Cost-Push Inflation, Stagflation, Deflation",
      "Fiscal Deficit: Total Expenditure - Total Receipts (Excluding Borrowings), Revenue Deficit (Revenue Expenditure - Revenue Receipts), Primary Deficit (Fiscal Deficit - Interest Payments), Fiscal Responsibility & Budget Management Act (FRBM - 2003 - Fiscal Deficit Target 3% of GDP), India's Fiscal Deficit (2023-24 - 5.8% of GDP)",
      "Sectors of Economy: Primary (Agriculture, Mining, Fishing - 17.7% of GDP), Secondary (Manufacturing, Construction - 29.3% of GDP), Tertiary (Services - 53% of GDP), Organized Sector (Registered, Permanent, Benefits), Unorganized Sector (Unregistered, Casual, No Benefits), Public Sector (Government Owned - PSUs), Private Sector (Private Ownership)"
    ]
  },
  41: {
    title: "Economy: Agriculture, Industry & LPG Reforms",
    topics: [
      "Agriculture: Types of Crops - Food Grains (Rice - West Bengal, UP, Punjab; Wheat - UP, Punjab, MP; Millets - Jowar, Bajra, Ragi), Commercial (Cotton - Gujarat, Maharashtra; Jute - West Bengal, Assam; Sugarcane - UP, Maharashtra, Karnataka; Tea - Assam, West Bengal; Coffee - Karnataka, Kerala; Rubber - Kerala), Plantation (Tea, Coffee, Rubber, Spices), Horticulture (Fruits - Mango, Banana, Citrus; Vegetables - Potato, Onion, Tomato)",
      "Cropping Seasons: Rabi (Winter - Oct-Dec Harvest - Wheat, Barley, Mustard - March-April), Kharif (Monsoon - June-Sept Harvest - Rice, Cotton, Sugarcane - Sept-Oct), Zaid (Summer - April-June - Fruits, Vegetables)",
      "Green Revolution: HYV Seeds (Wheat - Norman Borlaug, Rice - IR8), M.S. Swaminathan (Father of Indian Green Revolution), 1960s, Punjab-Haryana-Western UP, Food Self-Sufficiency, White Revolution (Operation Flood - 1970, Verghese Kurien - Amul), Blue Revolution (Fisheries, 1985-90), Yellow Revolution (Oilseeds - 1986-90), Silver Revolution (Egg Production)",
      "Irrigation: Drip (Micro-Irrigation - Water Saving), Sprinkler, Canal (Indira Gandhi Canal - Rajasthan, Bhakra Nangal Canal), Wells (Tube Wells, Open Wells), Major Irrigation Projects (Bhakra Nangal, Hirakud, Nagarjunsagar, Damodar Valley, Indira Sagar)",
      "Agriculture Marketing: MSP (Minimum Support Price - 23 Crops, Announced by CACP), APMC (Agricultural Produce Market Committee - State Regulated Markets - Mandi), e-NAM (National Agricultural Market - Electronic Trading), Price Support Scheme, Government Schemes (PM-KISAN - ₹6000/Yr to Farmers, PMFBY - Crop Insurance, PM-AASHA - Price Support, Soil Health Card Scheme)",
      "Industry: Large Scale (Iron & Steel - SAIL, TISCO, Rourkela, Bhilai, Bokaro, Jamshedpur; Textile - Cotton, Jute, Handloom; Cement, Sugar), Small Scale (MSMEs - 40% of Exports, 35% of GDP), Make in India (2014 - 25 Sectors, FDI Liberalization, Ease of Doing Business), Industrial Policy 1991 (LPG Reforms - Liberalisation, Privatisation, Globalisation), Industrial Corridors (Delhi-Mumbai, Chennai-Bengaluru, Amritsar-Kolkata), SEZs (Special Economic Zones - 15+ Major SEZs - Noida, Kandla, Chennai, Santa Cruz)"
    ]
  },
  42: {
    title: "Economy: Banking, Financial System, Budgeting & Schemes",
    topics: [
      "RBI (Reserve Bank of India - Central Bank - 1935 - Nationalised 1949): Functions - Monetary Authority (Repo Rate - 6.5%, Reverse Repo - 3.35%, CRR - 4.5%, SLR - 18%, MSF - 6.75%, OMO), Banker to Government (Central & State), Banker's Bank (Lender of Last Resort), Currency Issuer (Printer of Currency Notes), FX Management, Payment System, Governor of RBI (Shaktikanta Das - 25th Governor)",
      "Commercial Banks: Public Sector Banks (SBI, Bank of Baroda, Punjab National Bank, Canara Bank, Union Bank of India - 12 Nationalised Banks), Private Sector Banks (ICICI, HDFC, Axis, Kotak, Yes, IndusInd), Foreign Banks (HSBC, Citi, Standard Chartered), Cooperative Banks (Urban & Rural Co-operative), Regional Rural Banks (RRBs - 43)",
      "Development Banks: NABARD (National Bank for Agriculture & Rural Development - 1982), SIDBI (Small Industries Development Bank of India - 1989), EXIM Bank (Export-Import Bank of India - 1981)",
      "Payment Banks & Small Finance Banks: Payment Banks (Airtel Payments Bank, Paytm, India Post, Fino), Small Finance Banks (AU, Equitas, Ujjivan, Jana, Capital - Serve Unbanked & Underserved)",
      "NBFCs (Non-Banking Financial Companies): Registered Under RBI, Functions (Loans, Investments, Housing Finance), Differences from Banks (No Demand Deposits, No Payment System Access)",
      "Financial Inclusion: Pradhan Mantri Jan Dhan Yojana (PMJDY - 2014 - 50+ Crore Accounts, Zero Balance, Rupay Card), Pradhan Mantri Mudra Yojana (PMMY - 2015 - Credit to Micro Enterprises - Shishu, Kishor, Tarun), Stand-Up India (Dalit/Adivasi/Women Entrepreneurs), PM Awas Yojana (Housing for All), JAM Trinity (Jan Dhan + Aadhaar + Mobile)",
      "Money Market: Short-term Instruments (T-Bills - 91/182/364 Days, Commercial Papers - 3 Months to 1 Year, Certificate of Deposit - 3 Months to 1 Year, Call Money - 1 Day to 14 Days), Capital Market (Long-term - Equity, Debt, IPO/FPO), SEBI (Securities and Exchange Board of India - 1992 - Regulator of Capital Markets), Stock Exchanges (BSE - Bombay Stock Exchange - 1875 - Asia's Oldest, NSE - National Stock Exchange - 1992 - India's Largest), Sensex (30 Stocks), Nifty (50 Stocks), Mutual Funds (AMCs - Asset Management Companies), Insurance (IRDAI - 1999, LIC - 1956, GIC - 1972, Insurance Companies - 24 Life, 31 General, 7 Standalone Health), Government Budgeting (Union Budget - Revenue & Capital, Receipts & Expenditure, Direct Taxes - Income Tax, Corporate Tax, Indirect Taxes - GST, Customs, Excise), GST Structure (CGST - Central, SGST - State, IGST - Inter-State, UTGST - Union Territory), Goods & Services Tax (2017 - One Nation One Tax), Disinvestment (Policy - NITI Aayog Model, Methods - Auction, Offer for Sale, Strategic Sale, ETFs), Recent Schemes (PM Awas Yojana, Smart Cities Mission, AMRUT, Swachh Bharat, Digital India, Startup India, Skill India, Ujjwala Yojana)"
    ]
  },
  // ==================== SCIENCE (PHYSICS) ====================
  43: {
    title: "Science: Physics - Motion, Force, Work & Energy",
    topics: [
      "Motion: Speed (Average/Instantaneous), Velocity (Speed with Direction), Acceleration (Rate of Change of Velocity), Uniform/Non-Uniform Motion, Equations of Motion (v = u + at, s = ut + ½ at², v² = u² + 2as)",
      "Newton's Laws: 1st Law (Inertia - Objects at Rest Stay at Rest, Objects in Motion Stay in Motion Unless Acted Upon), 2nd Law (F = ma - Force = Mass × Acceleration), 3rd Law (Action-Reaction - Equal & Opposite)",
      "Inertia (Resistance to Change), Momentum (p = mv - Product of Mass & Velocity), Impulse (Change in Momentum), Conservation of Momentum (In Isolated Systems - m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂)",
      "Friction: Static (Object at Rest), Kinetic (Sliding - Object in Motion), Rolling (Rolling Object), Limiting Friction, Factors (Normal Reaction, Nature of Surfaces), Methods to Increase/Reduce, Angle of Friction & Repose",
      "Centripetal Force (Towards Center - For Circular Motion), Centrifugal Force (Pseudo Force - Away from Center), Applications (Banking of Roads, Centrifuge, Washing Machine)",
      "Work (W = F × d × cosθ), Energy (Kinetic - ½mv², Potential - mgh), Conservation of Energy (KE + PE = Constant), Power (P = W/t - Watt - Horsepower), Collisions (Elastic - KE Conserved, Inelastic - KE Lost)"
    ]
  },
  44: {
    title: "Science: Physics - Gravitation, Pressure & Heat",
    topics: [
      "Universal Law of Gravitation: F = G(m₁m₂)/r², G = 6.67 × 10⁻¹¹ Nm²/kg² (Gravitational Constant), Acceleration due to Gravity (g = GM/R² = 9.8 m/s²), Variation of g (Altitude - Decreases, Depth - Decreases, Rotation - Decreases at Equator, Increases at Poles), Escape Velocity (ve = √(2GM/R) = 11.2 km/s), Kepler's Laws (Planetary Motion - Elliptical Orbits, Equal Areas, T² ∝ R³)",
      "Weight (Mass × g - Depends on Gravitational Force), Mass (Constant), Weightlessness (Free Fall, Space)",
      "Pressure (P = F/A), Atmospheric Pressure (Barometer - 1 atm = 1.013 × 10⁵ Pa = 760 mm Hg), Hydrostatic Pressure (P = ρgh), Buoyancy (Upthrust = Weight of Displaced Fluid), Archimedes Principle, Principle of Floatation (Weight = Buoyant Force), Density & Relative Density",
      "Pascal's Law (Pressure Applied to Enclosed Fluid is Transmitted Undiminished), Hydraulic Lift, Hydraulic Brakes, Hydraulic Press",
      "Heat & Thermodynamics: Temperature (Celsius - °C, Fahrenheit - °F = (9/5 × °C) + 32, Kelvin - K = °C + 273), Specific Heat Capacity (C = Q/mΔT - Water - 4186 J/kg°C - High Specific Heat - Used as Coolant), Latent Heat (Fusion - Solid to Liquid, Vaporization - Liquid to Gas), Conduction (Direct Contact - Solids), Convection (Fluids - Gases & Liquids), Radiation (No Medium - Infrared), Laws of Thermodynamics (0th - Thermal Equilibrium, 1st - Energy Conservation, 2nd - Entropy, 3rd - Entropy Approaches Zero at Absolute Zero)",
      "Thermal Expansion: Linear (ΔL = αLΔT), Superficial (ΔA = βAΔT, β=2α), Cubical (ΔV = γVΔT, γ=3α), Application in Bridges (Expansion Joints), Bimetallic Strip (Thermostats)"
    ]
  },
  45: {
    title: "Science: Physics - Light, Sound & Electricity",
    topics: [
      "Reflection: Laws (Angle of Incidence = Angle of Reflection, Incident Ray, Reflected Ray, Normal in Same Plane), Plane Mirror (Image - Virtual, Erect, Same Size, Distance Equal), Spherical Mirrors (Concave - Converging, Convex - Diverging), Mirror Formula (1/f = 1/v + 1/u), Magnification (m = -v/u), Uses (Concave - Shaving Mirror, Torch; Convex - Rear View Mirrors)",
      "Refraction: Laws (Snell's Law - n₁ sin i = n₂ sin r, Incident & Refracted Rays in Same Plane), Refractive Index (n = c/v - Speed of Light in Vacuum / Speed in Medium), Total Internal Reflection (Critical Angle - n₂ > n₁, i > C, Applications - Fibre Optics, Mirage, Prism), Lens Formula (1/f = 1/v - 1/u), Power of Lens (P = 1/f, Dioptre), Prism (Dispersion - White Light Split into Spectrum - VIBGYOR)",
      "Human Eye: Structure (Cornea, Iris, Pupil, Lens, Retina - Rods & Cones, Optic Nerve), Myopia (Near-sighted - Concave Lens), Hypermetropia (Far-sighted - Convex Lens), Presbyopia (Age-related - Bifocal Lens), Astigmatism (Irregular Cornea - Cylindrical Lens), Microscope (Compound - Magnifying), Telescope (Astronomical - Refracting/Reflecting)",
      "Electromagnetic Spectrum: Order (Radio, Microwave, Infrared, Visible - 400-700 nm, Ultraviolet, X-Rays, Gamma Rays - Increasing Frequency, Decreasing Wavelength), Applications (Radio - Communication, Microwaves - Radar/Cooking, IR - Remote Sensing, UV - Sterilization, X-Rays - Medical Imaging, Gamma - Sterilization/Cancer)",
      "Sound: Production (Vibrations), Propagation (Needs Medium - Longitudinal Waves), Speed (In Air - 343 m/s at 20°C, Water - 1482 m/s, Steel - 5960 m/s - Density Matters), Frequency (Pitch - High/Low), Wavelength, Amplitude (Loudness - Decibels), Quality (Timbre), Echo (Reflection of Sound - 1/10th sec, 17.2 m Distance), Reverberation (Persistence of Sound), Ultrasonic (>20 kHz - Medical Imaging, Sonar), Infrasonic (<20 Hz - Earthquakes), Doppler Effect (Frequency Change due to Relative Motion - Pitch Changes)",
      "Electricity: Charge (Like Repel, Opposite Attract), Coulomb's Law (F = kq₁q₂/r²), Current (I = Q/t - Ampere), Voltage (V = W/Q - Volts), Resistance (R = V/I - Ohm - Resistivity), Ohm's Law (V = IR), Series Circuit (R_total = R₁ + R₂ + R₃..., Current Same), Parallel Circuit (1/R_total = 1/R₁ + 1/R₂ + 1/R₃..., Voltage Same), Heating Effect (Joule's Law - H = I²Rt), Electric Power (P = VI = I²R = V²/R - Watt - Commercial Unit - 1 kWh = 3.6 × 10⁶ J)",
      "Magnetic Effects: Oersted's Experiment (Current Produces Magnetic Field), Solenoid (Magnetic Field Produced), Electromagnet, Force on Current-Carrying Conductor (F = BIL sinθ - Fleming's Left Hand Rule), Electric Motor (DC Motor - Converts Electrical to Mechanical), Generator (AC/DC - Converts Mechanical to Electrical), Transformer (Step-up - Increases Voltage, Step-down - Decreases Voltage - Works on AC Only, Mutual Induction), AC vs DC (AC - Alternating Current - Changes Direction - 50 Hz in India, DC - Direct Current - Constant Direction)"
    ]
  },
  // ==================== SCIENCE (CHEMISTRY) ====================
  46: {
    title: "Science: Chemistry - Matter, Atom & Periodic Table",
    topics: [
      "Matter: States (Solid - Fixed Shape, Volume; Liquid - Fixed Volume, Variable Shape; Gas - Variable Shape, Volume; Plasma - Ionised Gas - Sun & Stars), Interconversion (Melting, Freezing, Vaporization, Condensation, Sublimation, Deposition), Evaporation (Surface Phenomenon), Condensation, Sublimation (Solid to Gas - Camphor), Diffusion (Gases/Liquids)",
      "Atomic Structure: Electron (J.J. Thomson - 1897 - -ve), Proton (Rutherford - 1919 - +ve - 1.67 × 10⁻²⁷ kg), Neutron (Chadwick - 1932 - No Charge - 1.67 × 10⁻²⁷ kg), Atomic Number (Number of Protons - Z), Mass Number (Protons + Neutrons - A), Isotopes (Same Z, Different A - e.g., ¹H, ²H, ³H - Deuterium, Tritium), Isobars (Same A, Different Z - e.g., ¹⁴C, ¹⁴N), Electronic Configuration (Bohr's Model - Shells - 2n² - K-2, L-8, M-18, N-32), Valence Electrons (Outer Shell), Octet Rule (8 Electrons - Stability)",
      "Periodic Table: Modern Periodic Table (Mendeleev's Law - 1869 - Periodic Properties Depend on Atomic Mass, Modern - Moseley - 1913 - Periodic Properties Depend on Atomic Number), 18 Groups (1-18 - Vertical Columns) & 7 Periods (1-7 - Horizontal Rows), Blocks (s, p, d, f), Metals (Left Side), Non-Metals (Right Side), Metalloids (Semi-Metals - B, Si, Ge, As, Sb, Te, Po), Periodicity: Atomic Radius (Decreases Left to Right, Increases Top to Bottom), Electronegativity (Ability to Attract Electrons - Fluorine - 4.0 Pauling Scale - Cesium - 0.7), Ionization Energy (Energy Required to Remove Electron - Increases Left to Right, Decreases Top to Bottom)"
    ]
  },
  47: {
    title: "Science: Chemistry - Chemical Bonding, Acids/Bases & Carbon",
    topics: [
      "Chemical Bonding: Ionic Bond (Transfer of Electrons - Na⁺Cl⁻ - Electrovalent), Covalent Bond (Sharing of Electrons - H₂O - Non-Metals), Metallic Bond (Positive Metal Ions in Sea of Electrons - Conductivity, Malleability), Coordinate Bond (Dative Bond - NH₄⁺, SO₃)",
      "Acids, Bases & Salts: Acids (Sour Taste, Turns Blue Litmus Red - pH < 7 - H⁺ Ions - HCl, H₂SO₄, HNO₃, CH₃COOH), Bases (Bitter Taste, Turns Red Litmus Blue - pH > 7 - OH⁻ Ions - NaOH, KOH, NH₄OH), pH Scale (0-14 - Acidic 0-7, Neutral 7, Basic 7-14 - Universal Indicator), Indicators (Litmus - Natural, Methyl Orange - Red to Yellow, Phenolphthalein - Colourless to Pink), Neutralization (Acid + Base → Salt + Water), Types of Salts (Normal - NaCl, Acidic - NaHSO₄, Basic - Na₂CO₃), Bleaching Powder (CaOCl₂ - Oxidizing Agent - Bleaching, Disinfectant), Washing Soda (Na₂CO₃·10H₂O - Cleaning Agent), Baking Soda (NaHCO₃ - Antacid, Baking Powder, Fire Extinguisher)",
      "Carbon & Its Compounds: Allotropes (Diamond - Hard, Clear, Covalent Network, High MP, Insulator; Graphite - Soft, Grey, Conductor, Lubricant, Pencil Lead; Fullerene - C₆₀, C₇₀ - Black, Semiconductor), Organic Compounds (Contain Carbon - Covalent, Chains), Inorganic Compounds (No C-H Bonds), Hydrocarbons (Alkanes - Saturated - Single Bonds - CₙH₂ₙ₊₂ - Methane, Ethane, Propane, Butane; Alkenes - Unsaturated - Double Bond - CₙH₂ₙ - Ethene, Propene; Alkynes - Triple Bond - CₙH₂ₙ₋₂ - Ethyne), Functional Groups (Alcohols - R-OH, Aldehydes - R-CHO, Ketones - R-CO-R', Carboxylic Acids - R-COOH), Soaps & Detergents (Soaps - Na/K Salts of Fatty Acids - Micelles - Form Scum in Hard Water; Detergents - Synthetic - Work in Hard Water), Cracking & Reforming (Petroleum Refining), Polymerization (Plastics, Rubber, Nylon, Polyester)"
    ]
  },
  48: {
    title: "Science: Chemistry - Metals, Non-Metals & Important Compounds",
    topics: [
      "Metals & Non-Metals: Metals (Malleable, Ductile, Conductors, Lustrous - Iron, Copper, Aluminium, Gold, Silver), Non-Metals (Brittle, Non-Conductors, Non-Lustrous - Oxygen, Nitrogen, Sulphur, Phosphorus, Carbon), Metalloids (Boron, Silicon, Germanium, Arsenic, Antimony, Tellurium, Polonium - Properties of Both)",
      "Reactivity Series (K > Na > Ca > Mg > Al > Zn > Fe > Sn > Pb > [H] > Cu > Hg > Ag > Au) - More Reactive Metals Displace Less Reactive from Compounds, Ores (Minerals from Which Metals are Extracted Economically), Extraction (Pyrometallurgy - Smelting, Electrolysis - Refining, Roasting/Calcination - Converting Ores to Oxides), Alloys (Steel - Fe + C - Hard/Strong; Brass - Cu + Zn - Electrical Fittings; Bronze - Cu + Sn - Statues/Meds; Amalgams - Alloys with Mercury), Corrosion (Rusting of Iron - Fe + O₂ + H₂O → Fe₂O₃·xH₂O - Conditions - Moisture, Oxygen, Salt (Electrolyte) - Methods - Painting, Galvanizing, Alloying, Sacrificial Protection)",
      "Important Compounds: Sodium Chloride (NaCl - Rock Salt/Sea Salt - Essential for Life, Sources - Sea Water, Mines - Salt Industry), Sodium Carbonate (Na₂CO₃·10H₂O - Washing Soda - Solvay Process - Used in Glass, Detergents, Textiles), Sodium Bicarbonate (NaHCO₃ - Baking Soda - Antacid, Fire Extinguisher, Baking Powder), Calcium Carbonate (CaCO₃ - Limestone/Marble - Building Materials, Cement - Quicklime (CaO) from Heating, Lime Water (Ca(OH)₂) from Quicklime + Water), Calcium Hydroxide (Ca(OH)₂ - Lime - Used in Construction, Agriculture, Sugar Refining), Potassium Permanganate (KMnO₄ - Strong Oxidizing Agent - Water Purification, Antiseptic), Hydrogen Peroxide (H₂O₂ - Bleaching Agent, Antiseptic, Rocket Fuel), Sulphuric Acid (H₂SO₄ - King of Chemicals - Contact Process - Used in Fertilizers, Dyes, Explosives, Batteries - Highly Corrosive), Nitric Acid (HNO₃ - Aqua Regia - HCl:HNO₃ - 3:1 - Dissolves Gold/Platinum), Hydrochloric Acid (HCl - Stomach Acid - Digestive, Industrial)"
    ]
  },
  49: {
    title: "Science: Chemistry - Environmental Chemistry & Polymers",
    topics: [
      "Ozone Layer: O₃ - Stratospheric Ozone (20-50 KM), Formation (O₂ + UV → 2O, O₂ + O → O₃), Depletion (CFCs - Chlorofluorocarbons - Refrigerants, Aerosols - Cl Radicals → O₃ → O₂), Antarctic Ozone Hole, Montreal Protocol (1987 - Phase Out ODS - Ozone Depleting Substances - Success Story), UV-B Radiation (Skin Cancer, Eye Damage, Immune System)",
      "Greenhouse Effect & Global Warming: GHGs - CO₂ (Major - 60%), CH₄ - Methane (20%), N₂O - Nitrous Oxide, CFCs, Tropospheric Ozone, GWP - Global Warming Potential, Sources (Fossil Fuels, Agriculture, Industry), Impact (Temperature Rise, Sea Level Rise, Extreme Weather, Melting Glaciers), Kyoto Protocol (1997 - Binding Targets - Annex I Countries - 5% Below 1990 - 2008-12), Paris Agreement (2015 - NDCs - Nationally Determined Contributions - 2°C to 1.5°C Target - COP 26 Glasgow - Net Zero 2070 by India), Carbon Sinks (Forests, Oceans), IPCC (Intergovernmental Panel on Climate Change)",
      "Acid Rain: pH < 5.6, Formation (SO₂ → H₂SO₄, NOₓ → HNO₃ - Nitrogen Oxides from Vehicles & Power Plants), Effects (Damage to Monuments - Taj Mahal (Marble), Acidification of Lakes, Crop Damage, Forest Dieback), Solution (Scrubbers in Chimneys, Catalytic Converters, Renewable Energy)",
      "Eutrophication: Excess Nutrients (Nitrates, Phosphates) in Water Bodies → Algal Blooms → Oxygen Depletion → Fish Kills, Sources (Fertilizers, Sewage, Detergents), Indicator (BOD - Biochemical Oxygen Demand - Higher = More Polluted), COD (Chemical Oxygen Demand)",
      "Water Pollution: Causes (Industrial Effluents, Agricultural Runoff, Sewage, Oil Spills), Parameters (pH, BOD, COD, TDS - Total Dissolved Solids, Heavy Metals - Mercury, Lead, Arsenic), Water Quality Standards (WHO, BIS), Wastewater Treatment (Primary - Physical, Secondary - Biological, Tertiary - Chemical)",
      "Polymers & Plastics: Natural Polymers (Proteins, Starch, Cellulose, Natural Rubber), Synthetic Polymers (Plastic - Polyethylene, PVC, Nylon, Teflon, Bakelite, Polyester), Thermosetting vs Thermoplastics, Biodegradable vs Non-Biodegradable, Recycling (Plastic Waste Management Rules 2016 - Extended Producer Responsibility)"
    ]
  },
  // ==================== SCIENCE (BIOLOGY) ====================
  50: {
    title: "Science: Biology - Cell, Tissues & Classification",
    topics: [
      "Cell: Prokaryotic (No Nucleus - Bacteria, Blue-Green Algae - DNA in Nucleoid Region - 70S Ribosomes), Eukaryotic (True Nucleus - Plant & Animal - Membrane-Bound Organelles - 80S Ribosomes), Cell Theory (Schleiden - 1838 - All Plants from Cells, Schwann - 1839 - All Animals from Cells, Virchow - 1855 - All Cells from Pre-existing Cells)",
      "Cell Organelles: Cell Wall (Plant - Cellulose - Support, Protection), Cell Membrane (Selectively Permeable - Phospholipid Bilayer - Fluid Mosaic Model), Nucleus (Control Center - Chromatin, Nucleolus, Nuclear Envelope), Mitochondria (Powerhouse - ATP - Double Membrane - Own DNA - Endosymbiotic Theory), Endoplasmic Reticulum (Smooth - Lipid Synthesis, Rough - Protein Synthesis - Ribosomes), Golgi Apparatus (Packaging, Modification, Secretion), Lysosome (Suicidal Bag - Hydrolytic Enzymes - Digestion, Autophagy), Ribosome (Protein Synthesis - 70S Prokaryotic, 80S Eukaryotic), Vacuole (Storage, Turgidity in Plants), Chloroplast (Photosynthesis - Thylakoid, Grana, Stroma - Pigment - Chlorophyll - Own DNA), Plastids (Leucoplasts - Storage, Chromoplasts - Pigments)",
      "Plant Tissues: Meristematic (Apical - Growth in Length, Lateral - Growth in Width, Intercalary - Growth in Internodes), Permanent - Simple (Parenchyma - Storage/Support, Collenchyma - Flexible Support, Sclerenchyma - Hard Support - Lignified), Complex (Xylem - Water Transport - Dead Cells - Tracheids, Vessels, Xylem Fibres, Xylem Parenchyma; Phloem - Food Transport - Sieve Tubes, Companion Cells, Phloem Parenchyma, Phloem Fibres)",
      "Animal Tissues: Epithelial (Squamous - Blood Vessels/Alveoli - Diffusion; Cuboidal - Glands - Secretion; Columnar - Intestine - Absorption; Ciliated - Respiratory Tract - Movement of Particles; Glandular - Secretion), Connective (Blood - Fluid Matrix - RBC, WBC, Platelets; Bone - Calcium & Phosphorus - Support; Cartilage - Flexible - Nose, Ear, Joints; Ligament - Bone to Bone; Tendon - Muscle to Bone; Areolar - Loose Connective - Skin, Organs; Adipose - Fat Storage - Insulation), Muscular (Skeletal - Voluntary, Striated - Limbs; Smooth - Involuntary, Non-Striated - Blood Vessels, Intestine; Cardiac - Heart - Involuntary, Striated - Intercalated Discs), Nervous (Neurons - Conduct Impulses - Brain, Spinal Cord, Nerves)",
      "Five Kingdom Classification: Monera (Prokaryotic - Bacteria - Unicellular), Protista (Eukaryotic - Unicellular - Amoeba, Paramecium), Fungi (Eukaryotic - Heterotrophic - Saprophytic - Yeast, Mushroom - Chitin Cell Wall), Plantae (Autotrophic - Photosynthetic - Cellulose Cell Wall), Animalia (Heterotrophic - Multicellular - No Cell Wall), Basis (Cell Type, Nutrition, Reproduction, Body Organization, Phylogeny)"
    ]
  },
  51: {
    title: "Science: Biology - Human Body Systems - Part 1",
    topics: [
      "Digestive System: Organs (Mouth - Chewing, Amylase; Esophagus - Peristalsis; Stomach - Gastric Glands - HCl, Pepsin, Mucus; Small Intestine - Duodenum (Bile from Liver, Pancreatic Juice), Jejunum & Ileum - Absorption (Villi); Large Intestine - Colon, Rectum, Anus - Water Absorption, Defecation), Liver (Bile Production - Emulsifies Fats - Gallbladder Stores), Pancreas (Trypsin, Lipase, Amylase - Digestive Enzymes), Digestion of Carbohydrates (Amylase → Maltase → Glucose), Proteins (Pepsin → Trypsin → Peptidases → Amino Acids), Fats (Bile → Lipase → Fatty Acids + Glycerol), Enzymes (Amylase - Starch → Maltose, Pepsin - Proteins → Peptides, Trypsin - Proteins → Peptides, Lipase - Fats → Fatty Acids, Maltase - Maltose → Glucose, Sucrase - Sucrose → Fructose + Glucose, Lactase - Lactose → Galactose + Glucose)",
      "Respiratory System: Organs (Nasal Cavity - Filter, Humidify, Warm Air; Pharynx; Larynx - Voice Box - Vocal Cords; Trachea - Windpipe - Cartilage Rings; Bronchi → Bronchioles; Lungs - Alveoli - Gas Exchange), Breathing (Inhalation - Diaphragm Contracts, Ribs Rise - Air In; Exhalation - Diaphragm Relaxes, Ribs Fall - Air Out), Gas Exchange (O₂ Diffuses into Blood, CO₂ Diffuses out), Aerobic Respiration (Glucose + O₂ → CO₂ + H₂O + Energy - 36-38 ATP - Mitochondria), Anaerobic Respiration (In Muscle - Glucose → Lactic Acid + Energy - 2 ATP, In Yeast - Glucose → Ethanol + CO₂ + Energy), Respiratory Volumes (Tidal - 500 ml, Inspiratory Reserve, Expiratory Reserve, Vital Capacity - 3500-4500 ml)",
      "Circulatory System: Heart (4 Chambers - Right Atrium, Right Ventricle, Left Atrium, Left Ventricle - Septum - Valves - Tricuspid, Bicuspid (Mitral), Pulmonary, Aortic), Blood Vessels (Arteries - Carry O₂-rich Blood Away from Heart - Thick Walls - High Pressure; Veins - Carry CO₂-rich Blood Towards Heart - Thin Walls - Valves - Low Pressure; Capillaries - Exchange - Thin Walls), Blood (RBC - Red Blood Corpuscles - Erythrocytes - Contains Haemoglobin - 4.5-5.5 Million/mm³ - Life Span - 120 Days - Produced in Bone Marrow; WBC - White Blood Cells - Leukocytes - 5000-10000/mm³ - Immune - Phagocytes (Neutrophils, Macrophages) & Lymphocytes (B & T Cells); Platelets - Thrombocytes - 1.5-4 Lakhs/mm³ - Blood Clotting), Blood Groups (ABO System - A, B, AB, O - Antigens on RBC, Antibodies in Plasma - Universal Donor - O, Universal Recipient - AB), Rh Factor (Rhesus - +ve or -ve - Rh Incompatibility - Erythroblastosis Fetalis - RhoGAM), Double Circulation (Pulmonary - Right Ventricle → Lungs → Left Atrium; Systemic - Left Ventricle → Body → Right Atrium)",
      "Excretory System: Kidneys (2 - Bean-Shaped - Cortex, Medulla, Renal Pelvis), Nephrons (Structural & Functional Unit - Glomerulus - Bowman's Capsule - Proximal Convoluted Tubule - Loop of Henle - Distal Convoluted Tubule - Collecting Duct), Urine Formation (Ultrafiltration - Glomerulus - Water, Salts, Glucose, Urea; Reabsorption - PCT - Glucose, Water, Salts; Loop of Henle - Water Reabsorption (Countercurrent); DCT - Selective Reabsorption; Collecting Duct - Concentration), Ureters (Transport Urine to Bladder), Bladder (Storage - 300-500 ml), Urethra (Excretion), Composition of Urine (95% Water, 5% Urea, Uric Acid, Salts, Creatinine), Functions (Removal of Urea, Uric Acid, Excess Water, Regulate Blood Pressure, pH Balance, RBC Production - Erythropoietin)"
    ]
  },
  52: {
    title: "Science: Biology - Human Body Systems - Part 2",
    topics: [
      "Nervous System: Central Nervous System (CNS - Brain & Spinal Cord), Peripheral Nervous System (PNS - Nerves), Brain (Cerebrum - Largest - Higher Functions - Frontal, Parietal, Temporal, Occipital Lobes; Cerebellum - Motor Coordination; Medulla Oblongata - Vital Functions - Heart Rate, Breathing, Digestion; Hypothalamus - Homeostasis - Temperature, Hunger, Thirst; Pons - Relay between Cerebellum & Medulla; Thalamus - Relay Station), Spinal Cord (Reflex Arc - Sensory Neuron → Interneuron → Motor Neuron), Neurotransmitters (Acetylcholine, Dopamine, Serotonin, GABA - Chemical Synapse), Reflex Action (Involuntary - Automatic Response - Knee Jerk, Withdrawal Reflex), Nervous System Disorders (Alzheimer's, Parkinson's, Multiple Sclerosis - Demyelination)",
      "Endocrine System: Pituitary Gland (Master Gland - Anterior - GH, TSH, ACTH, FSH, LH, PRL; Posterior - ADH, Oxytocin - Controls Growth, Reproduction, Metabolism), Thyroid (T3, T4 - Metabolism - Thyroxine - Iodine Required - Hypothyroidism - Goitre, Hyperthyroidism - Graves' Disease), Parathyroid (PTH - Calcium Regulation), Adrenal (Cortex - Cortisol, Aldosterone; Medulla - Epinephrine, Norepinephrine - Fight-or-Flight), Pancreas (Islets of Langerhans - Insulin - Lowers Blood Sugar, Glucagon - Raises Blood Sugar - Diabetes Mellitus - Type 1 (Insulin Dependent), Type 2 (Insulin Resistance)), Gonads (Testes - Testosterone - Male; Ovaries - Estrogen, Progesterone - Female - Puberty, Reproduction), Pineal Gland (Melatonin - Sleep Cycle), Thymus (T-Cell Maturation)",
      "Skeletal System: Axial (Skull - 22 Bones - Cranium 8, Face 14; Hyoid; Vertebral Column - 33 - Cervical 7, Thoracic 12, Lumbar 5, Sacrum 5, Coccyx 4; Rib Cage - 12 Pairs - True Ribs 1-7, False Ribs 8-10, Floating Ribs 11-12; Sternum), Appendicular (Limbs - Upper Extremity - Shoulder Girdle - Clavicle, Scapula - Humerus, Radius, Ulna, Carpals, Metacarpals, Phalanges; Lower Extremity - Pelvic Girdle - Ilium, Ischium, Pubis - Femur, Patella, Tibia, Fibula, Tarsals, Metatarsals, Phalanges), Joints (Ball-and-Socket - Shoulder, Hip; Hinge - Elbow, Knee; Pivot - Neck; Gliding - Wrist, Ankle; Saddle - Thumb; Sutures - Skull - Immovable), Functions (Support, Protection - Skull (Brain), Rib Cage (Heart/Lungs), Movement, Blood Cell Production (Bone Marrow), Mineral Storage (Ca, P))",
      "Muscular System: Types (Skeletal - Voluntary, Striated - Attached to Bones - 650 Muscles; Smooth - Involuntary, Non-Striated - Blood Vessels, Internal Organs; Cardiac - Heart - Involuntary, Striated - Intercalated Discs), Structure (Muscle Fibres - Myofibrils - Actin (Thin) & Myosin (Thick) Filaments - Sliding Filament Theory - Contraction), Neuromuscular Junction (Motor Neuron → Muscle Fibre - Acetylcholine - Contraction), Antagonistic Muscles (Biceps - Flexor, Triceps - Extensor), Muscle Fatigue (Lactic Acid Accumulation), Muscle Diseases (Muscular Dystrophy - Genetic, Myasthenia Gravis - Autoimmune)"
    ]
  },
  53: {
    title: "Science: Biology - Nutrition, Diseases & Reproduction",
    topics: [
      "Nutrition: Carbohydrates (Energy - 4 kcal/g - Glucose, Fructose, Sucrose, Starch, Glycogen, Cellulose - Sources: Cereals, Sugarcane, Fruits, Potatoes), Proteins (Growth & Repair - 4 kcal/g - Amino Acids - Essential & Non-Essential - Sources: Pulses, Meat, Eggs, Fish, Dairy, Legumes - Complete & Incomplete Proteins), Fats (Energy Storage - 9 kcal/g - Saturated & Unsaturated - Ghee, Butter, Oils - Essential Fatty Acids - Omega-3, Omega-6), Vitamins (Water-Soluble - B-Complex (B1 - Thiamine - Beri-Beri, B2 - Riboflavin, B3 - Niacin - Pellagra, B5 - Pantothenic Acid, B6 - Pyridoxine, B7 - Biotin, B9 - Folic Acid - Anaemia, B12 - Cobalamin - Pernicious Anaemia), C - Ascorbic Acid - Scurvy, Collagen Synthesis; Fat-Soluble - A - Retinol - Night Blindness, D - Calciferol - Rickets (Children), Osteomalacia (Adults), E - Tocopherol - Antioxidant, K - Phylloquinone - Blood Clotting), Minerals (Macro - Ca (Bones/Teeth - Milk), P (Energy - ATP), Na/K (Nerve Impulses), Mg (Enzyme); Micro - Fe (Haemoglobin - Anaemia - Iron Deficiency), I (Thyroid - Goitre), Zn (Wound Healing), Cu (Enzyme), Se (Antioxidant), F (Teeth), Mn (Bone))",
      "Human Diseases: Bacterial (Tuberculosis - Mycobacterium tuberculosis - Lungs - BCG Vaccine; Cholera - Vibrio cholerae - Water/Food - Diarrhea; Typhoid - Salmonella typhi - Water/Food - Widal Test; Tetanus - Clostridium tetani - Wound Infection - Vaccine; Pneumonia - Streptococcus pneumoniae - Lungs; Diphtheria - Corynebacterium diphtheriae - Throat - Vaccine; Leprosy - Mycobacterium leprae - Skin/Nerves; Plague - Yersinia pestis - Fleas/Bites - Black Death), Viral (COVID-19 - SARS-CoV-2 - Respiratory - PPE/Isolation - Vaccines; Polio - Poliovirus - Paralysis - Oral Vaccine; HIV/AIDS - Human Immunodeficiency Virus - Immune System - ART; Hepatitis - A (Faecal-Oral), B (Blood/Sexual - Vaccine), C (Blood - No Vaccine); Dengue - Flavivirus - Mosquito (Aedes) - Dengue Fever/Hemorrhagic; Flu - Influenza Virus - Seasonal; Rabies - Rhabdovirus - Animal Bites - Fatal - Vaccination; Chickenpox - Varicella Zoster; Measles - Morbillivirus - Vaccine; Mumps - Mumps Virus - Swelling of Parotid Glands; Rubella - German Measles - Teratogenic), Fungal (Ringworm - Tinea - Skin; Athlete's Foot - Trichophyton; Candidiasis - Candida - Thrush), Protozoan (Malaria - Plasmodium vivax/falciparum - Anopheles Mosquito - Fever; Kala-azar - Leishmania donovani - Sandfly; Amoebiasis - Entamoeba histolytica - Dysentery; Sleeping Sickness - Trypanosoma - Tsetse Fly), Deficiency Diseases (Scurvy - Vitamin C, Rickets/Osteomalacia - Vitamin D, Beri-Beri - Vitamin B1 (Thiamine), Anaemia - Iron/Vitamin B12/Folate, Goitre - Iodine, Pellagra - Vitamin B3 (Niacin), Xerophthalmia - Vitamin A), Lifestyle Diseases (Diabetes - Type 2 - Insulin Resistance - Diet/Exercise; Hypertension - High BP - 140/90 mmHg - Lifestyle; Cardiovascular Disease - Atherosclerosis, Heart Attack - Lifestyle/Fatty Diet; Obesity - BMI > 30 - Obesity; Osteoporosis - Bone Density - Calcium Deficiency/Ca; Cancer - Uncontrolled Cell Division - Carcinogens/Tobacco/Radiation/Genetics - Chemotherapy/Radiation/Surgery)",
      "Reproduction: Asexual (Binary Fission - Bacteria, Amoeba - Simple Division; Budding - Yeast, Hydra - New Individual from Outgrowth; Spore Formation - Fungi, Mosses, Ferns - Spores Germinate; Vegetative Propagation - Plants - Runners, Bulbs, Tubers, Rhizomes - Clone; Fragmentation - Flatworms, Sponges - New from Fragments), Sexual (Gametes - Male (Sperm - Motile) & Female (Ovum - Non-Motile) - Fusion (Fertilization) → Zygote → Embryo, Fertilization (Internal - Mammals, Birds, Reptiles; External - Fishes, Amphibians), Menstrual Cycle (28 Days - Follicular Phase (FSH, Estrogen), Ovulation (LH Surge - Day 14), Luteal Phase (Progesterone), Menstruation (If No Fertilization - Shedding of Uterine Lining - 3-7 Days), Pregnancy (Fertilization → Implantation → Gestation - 40 Weeks → Parturition (Childbirth)), Reproductive Health (Family Planning - Contraceptives - Condoms, Pills, IUDs, Sterilization, Abortion (MTP Act - 1971 - 20 Weeks)), Reproductive System Diseases (STDs - Syphilis, Gonorrhoea, HIV/AIDS, Herpes), Infertility (IVF - In-Vitro Fertilization - Test Tube Baby, Surrogacy, ART - Assisted Reproductive Technology)"
    ]
  },
  54: {
    title: "Science: Biology - Genetics, Evolution & Environment",
    topics: [
      "Genetics: Mendel's Laws (Segregation - Alleles Separate During Gamete Formation - 3:1 Monohybrid Ratio; Independent Assortment - Genes on Different Chromosomes Segregate Independently - 9:3:3:1 Dihybrid Ratio), Dominance & Recessiveness (Trait Expressed in Heterozygote - Dominant; Expressed only in Homozygote - Recessive), DNA (Deoxyribonucleic Acid - Double Helix - Watson & Crick - 1953 - Nucleotides - Sugar (Deoxyribose), Phosphate Group, Nitrogenous Bases (Adenine, Guanine - Purines; Thymine, Cytosine - Pyrimidines) - Base Pairing - A=T, G≡C - Complementary Strands - Replication - Semiconservative), RNA (Ribonucleic Acid - Single Stranded - Sugar - Ribose - Bases - A, G, C, U - Uracil Replaces Thymine - Types - mRNA (Messenger - Carries Genetic Code), tRNA (Transfer - Transports Amino Acids), rRNA (Ribosomal - Protein Synthesis)), Genetic Disorders (Thalassemia - α & β - Inherited Anaemia - Reduced Haemoglobin; Down Syndrome - Trisomy 21 - Mental Retardation, Short Stature; Sickle-Cell Anaemia - Point Mutation - Abnormal Haemoglobin (HbS) - Resistant to Malaria; Haemophilia - X-linked - Blood Clotting Disorder - 'Royal Disease'; Colour Blindness - X-linked - Red/Green; Phenylketonuria (PKU) - Phenylalanine Accumulation - Mental Retardation - Genetic Testing), Chromosomal Abnormalities (Down - 47, XX/XY +21; Turner - 45, XO - Female; Klinefelter - 47, XXY - Male)",
      "Evolution: Darwin's Theory (Natural Selection - Survival of the Fittest - Those Better Adapted Survive & Reproduce - Variation & Inheritance - Overproduction - Struggle for Existence - Natural Selection - Speciation), Lamarck's Theory (Use & Disuse - Giraffe Neck - Acquired Characteristics Inherited - Disproved by Weismann), Evidence for Evolution (Fossils - Paleontology - Transitional Fossils (Archaeopteryx - Reptile-Bird), Comparative Anatomy - Homologous Organs (Same Origin - Different Functions - Forelimbs of Mammals - Evidence of Common Descent), Analogous Organs (Different Origin - Same Function - Wings of Bird, Insect, Bat - Convergent Evolution), Vestigial Organs (Appendix, Tailbone, Wisdom Teeth - No Function - Evidence of Evolution), Embryology (Similar Embryonic Development - Vertebrate Embryos), Molecular Evidence (DNA, Protein Sequences - Cytochrome C - Common Ancestry), Human Evolution (Australopithecus - 4 MYA - Africa - Bipedal; Homo Habilis - 2.5 MYA - Tool Maker; Homo Erectus - 1.8 MYA - Fire, Out of Africa; Homo Neanderthalensis - 200,000 YA - Europe, Extinct; Homo Sapiens - 200,000 YA - Modern Humans - Africa, Dispersed Worldwide), Speciation (Geographical Isolation, Reproductive Isolation, Mutation, Natural Selection)",
      "Environmental Science: Ecosystem (Components - Abiotic (Light, Temperature, Water, Soil, Air) & Biotic (Producers - Plants/Photosynthesis, Consumers - Herbivores (Primary), Carnivores (Secondary), Omnivores, Decomposers - Bacteria/Fungi)), Food Chain (Producer → Herbivore → Carnivore → Top Carnivore - Grass → Grasshopper → Frog → Snake → Eagle), Food Web (Interconnected Food Chains), Ecological Pyramids (Pyramid of Numbers, Biomass, Energy - Energy Pyramid Always Upright - Only 10% Energy Passes to Next Trophic Level - Lindeman's Law of 10% Energy Transfer), Biogeochemical Cycles (Water Cycle - Evaporation, Condensation, Precipitation, Runoff; Carbon Cycle - Photosynthesis, Respiration, Combustion, Decomposition - Carbon Sinks - Oceans, Forests, Fossil Fuels; Nitrogen Cycle - Nitrogen Fixation (Legumes - Rhizobium, Lightning), Nitrification (Nitrosomonas - NH₃ → NO₂⁻, Nitrobacter - NO₂⁻ → NO₃⁻), Assimilation (Plants), Ammonification (Decomposers - Organic N → NH₃), Denitrification (Pseudomonas - NO₃⁻ → N₂)), Biodiversity (Types - Genetic (Within Species), Species (Number of Species), Ecosystem (Variety of Habitats)), Conservation (In-situ - National Parks (Corbett, Kanha, Kaziranga, Sundarbans, Gir, Jim Corbett), Wildlife Sanctuaries, Biosphere Reserves (Nilgiri, Sundarbans, Nanda Devi, Gulf of Mannar, Great Nicobar, Achanakmar-Amarkantak, Similipal, Nokrek, Manas, Dibru-Saikhowa, Dihang-Dibang, Pachmarhi, Kanchenjunga, Agasthyamalai, Dehang Debang, Rann of Kutch, Cold Desert, Seshachalam, Panna, Shivalik); Ex-situ - Zoos, Botanical Gardens, Seed Banks, Gene Banks, Cryopreservation), IUCN Red List (Criteria - Endangered (EN), Vulnerable (VU), Critically Endangered (CR), Least Concern (LC), Extinct (EX) - Threat Categories), CITES (Convention on International Trade in Endangered Species - 1975 - Appendices I, II, III - Trade Regulation), Endangered Species (Tiger (Project Tiger - 1973 - 52 Tiger Reserves), Elephant (Project Elephant - 1992), One-Horned Rhino (Kaziranga), Asiatic Lion (Gir), Snow Leopard, Bengal Florican, Great Indian Bustard, Gangetic Dolphin)",
      "Biotechnology: Genetic Engineering (Recombinant DNA Technology - Restriction Enzymes (Molecular Scissors - EcoRI), Ligase, Vectors (Plasmids) - Used in Insulin Production (Humulin) - Bacteria, Vaccine Production), Cloning (Somatic Cell Nuclear Transfer - Dolly Sheep - 1996 - First Mammalian Clone - Ethical Issues), DNA Fingerprinting (Variable Number Tandem Repeats - VNTRs - Short Tandem Repeats - STRs - Used in Forensics, Paternity Testing, Genetic Disorders), Vaccines (Inactivated/Subunit/MRNA - Active Immunity - Stimulates Immune System to Produce Antibodies - Memory Cells - Long-term Protection), Antibiotics (Bactericidal - Kill Bacteria - Penicillin - Alexander Fleming - 1928; Bacteriostatic - Inhibit Growth), GMO (Genetically Modified Organisms - Bt Cotton (Bacillus thuringiensis - Insect Resistance), Bt Brinjal, Golden Rice (Vitamin A - β-Carotene), Bt Cotton - 95% of Indian Cotton - Protects Against Bollworm), CRISPR-Cas9 (Gene Editing Technology - Precise Editing of DNA - Applications in Medicine, Agriculture, Disease Resistance), Stem Cells (Embryonic & Adult Stem Cells - Undifferentiated Cells - Can Differentiate into Specialized Cells - Therapy for Parkinson's, Diabetes, Spinal Cord Injuries - Ethical Debate), Nanotechnology in Medicine (Drug Delivery, Imaging, Diagnostics, Cancer Treatment), Bioinformatics (Use of Computers & Mathematics to Analyze Biological Data - Genome Sequencing - Human Genome Project (2003) - 3.2 Billion Base Pairs - 20,000-25,000 Genes)"
    ]
  },
  // ==================== STATIC GK & CURRENT AFFAIRS ====================
  55: {
    title: "Static GK: Books, Authors & National Symbols",
    topics: [
      "Books & Authors: Ancient (Vedas - Rig, Yajur, Sama, Atharva - Anonymous; Puranas - Vyasa - 18 Puranas; Ramayana - Valmiki; Mahabharata - Ved Vyasa; Arthashastra - Kautilya (Chanakya); Buddhist Tripitakas - Vinaya, Sutta, Abhidhamma; Jain Agamas - Mahavira's Disciple; Manusmriti - Manu; Panchatantra - Vishnu Sharma; Yoga Sutras - Patanjali; Natyashastra - Bharata Muni; Sushruta Samhita - Sushruta; Charaka Samhita - Charaka; Ashtadhyayi - Panini; Raghuvamsha, Kumarasambhava, Meghaduta, Abhijnanasakuntalam - Kalidasa; Mrichchhakatika - Shudraka; Mudrarakshasa - Vishakhadatta; Harshacharita - Banabhatta; Rajatarangini - Kalhana - Kashmir History; Gita Govinda - Jayadeva; Amarakosha - Amarasimha; Brihat Samhita - Varahamihira; Aryabhatiya - Aryabhata)",
      "Medieval Books (Akbarnama, Ain-i-Akbari - Abul Fazl; Baburnama - Babur (Autobiography - Turki); Humayunnama - Gulbadan Begum; Tuzuk-i-Jahangiri - Jahangir's Memoirs; Fatwa-e-Alamgiri - Aurangzeb; Padshahnama - Mirza Inayat; Alamgirnama - Kazim; Tarikh-i-Firozshahi - Ziauddin Barani; Futuh-us-Salatin - Isami; Taj-ul-Maasir - Hasan Nizami; Khazain-ul-Futuh - Amir Khusrau; Tuhfat-ul-Mujahideen - Zainuddin (First History of Kerala))",
      "Modern Books (Discovery of India - Jawaharlal Nehru; Glimpses of World History - Jawaharlal Nehru; Anandamath - Bankim Chandra Chatterjee (Vande Mataram); Gitanjali - Rabindranath Tagore (Nobel Prize - 1913); Godaan - Munshi Premchand; The Guide - R.K. Narayan; Train to Pakistan - Khushwant Singh; The White Tiger - Aravind Adiga (Booker - 2008); A Suitable Boy - Vikram Seth; The God of Small Things - Arundhati Roy (Booker - 1997); The Inheritance of Loss - Kiran Desai (Booker - 2006); The Glass Palace - Amitav Ghosh; India Wins Freedom - Maulana Azad; My Experiment with Truth - Gandhi; The Discovery of India - Nehru; Freedom at Midnight - Larry Collins & Dominique Lapierre; Indian Struggle - Subhash Chandra Bose; Wings of Fire - A.P.J. Abdul Kalam; The Argumentative Indian - Amartya Sen; India After Gandhi - Ramachandra Guha; The Great Indian Novel - Shashi Tharoor)",
      "Foreign Authors & Books: Mein Kampf - Adolf Hitler; A Brief History of Time - Stephen Hawking; The Theory of Everything - Stephen Hawking; The Art of War - Sun Tzu; The Prince - Niccolò Machiavelli; The Origin of Species - Charles Darwin; The Wealth of Nations - Adam Smith; Das Kapital - Karl Marx; The Communist Manifesto - Marx & Engels; To Kill a Mockingbird - Harper Lee; The Great Gatsby - F. Scott Fitzgerald; The Catcher in the Rye - J.D. Salinger; The Alchemist - Paulo Coelho; Harry Potter Series - J.K. Rowling; Lord of the Rings - J.R.R. Tolkien; The Hobbit - J.R.R. Tolkien; 1984 - George Orwell; Animal Farm - George Orwell; Brave New World - Aldous Huxley; Fahrenheit 451 - Ray Bradbury; The Da Vinci Code - Dan Brown; Angels & Demons - Dan Brown; The Diary of a Young Girl - Anne Frank; The Kite Runner - Khaled Hosseini; A Thousand Splendid Suns - Khaled Hosseini; The Book Thief - Markus Zusak; The Hunger Games - Suzanne Collins; The Power of Your Subconscious Mind - Joseph Murphy; Think and Grow Rich - Napoleon Hill; The Seven Habits of Highly Effective People - Stephen Covey; How to Win Friends and Influence People - Dale Carnegie; The Power of Positive Thinking - Norman Vincent Peale; Rich Dad Poor Dad - Robert Kiyosaki",
      "National Symbols: Flag (Tricolour - Saffron (Sacrifice), White (Peace), Green (Growth) - Ashoka Chakra in Centre - 24 Spokes - Design by Pingali Venkayya - Adopted July 22, 1947 - Ratio 3:2), Anthem (Jana Gana Mana - Rabindranath Tagore - Adopted Jan 24, 1950 - 52 Seconds - Bengal)", "Song (Vande Mataram - Bankim Chandra Chatterjee - Anandamath - Adopted Jan 24, 1950 - First Verse), Emblem (Lion Capital of Ashoka - Sarnath - 4 Lions - 4 Animals (Elephant, Horse, Bull, Lion) - Dharma Chakra - Motto - Satyamev Jayate (Truth Alone Triumphs) - Adopted Jan 26, 1950), Animal (Tiger - Panthera tigris - 1972 - Declared 1973 - National Heritage Animal), Bird (Peacock - Pavo cristatus - 1963), Flower (Lotus - Nelumbo nucifera - 1950), Tree (Banyan - Ficus benghalensis - 1950), Fruit (Mango - Mangifera indica - 1950), River (Ganga - 2008), Aquatic Animal (Gangetic Dolphin - 2010), Microbe (Lactobacillus delbrueckii - 2012 - Fermentation), National Reptile (King Cobra - 2012), National Heritage Animal (Elephant - 2010), National Currency (₹ - Indian Rupee - Symbol - D. Udaya Kumar - 2010)"
    ]
  },
  56: {
    title: "Static GK: Sports, Capitals & Currencies, Important Days",
    topics: [
      "Sports: Olympics (Host Cities - Athens 1896, Paris 1900, St. Louis 1904, London 1908, Stockholm 1912, Antwerp 1920, Paris 1924, Amsterdam 1928, Los Angeles 1932, Berlin 1936, London 1948, Helsinki 1952, Melbourne 1956, Rome 1960, Tokyo 1964, Mexico City 1968, Munich 1972, Montreal 1976, Moscow 1980, Los Angeles 1984, Seoul 1988, Barcelona 1992, Atlanta 1996, Sydney 2000, Athens 2004, Beijing 2008, London 2012, Rio 2016, Tokyo 2020, Paris 2024), Asian Games (India Hosted - 1951 & 1982), Commonwealth Games (India Hosted - 2010 Delhi), Cricket World Cup (Winners - India - 1983 (Kapil Dev), 2011 (Dhoni), 2023 Runner-up), ICC Trophies (Champions Trophy - India - 2002, 2013; T20 World Cup - India - 2007, 2024), Football World Cup (Winners - Brazil 5, Germany 4, Italy 4, Argentina 3, France 2, Uruguay 2, England 1, Spain 1, India Never Qualified), Grand Slam Tournaments (Australian Open, French Open - Roland Garros, Wimbledon, US Open), FIFA (Fédération Internationale de Football Association - Headquarters - Zurich, Switzerland), ICC (International Cricket Council - Dubai, UAE), IOC (International Olympic Committee - Lausanne, Switzerland), Major Sports Personalities (Sachin Tendulkar - Cricket, M.S. Dhoni - Cricket, Virat Kohli - Cricket, Rahul Dravid - Cricket, P.V. Sindhu - Badminton, Saina Nehwal - Badminton, Mary Kom - Boxing, Vijender Singh - Boxing, Abhinav Bindra - Shooting (Olympic Gold - 2008), Neeraj Chopra - Javelin (Olympic Gold - 2020), Milkha Singh - Athletics, P.T. Usha - Athletics, Dhyan Chand - Hockey, Ronaldo - Football, Messi - Football, Serena Williams - Tennis, Roger Federer - Tennis, Nadal - Tennis, Djokovic - Tennis), Khel Ratna/Arjuna/Dronacharya Awards (Khel Ratna - Highest Sports Honor - 1991; Arjuna - 1961; Dronacharya - 1985; Dhyan Chand - 2002)",
      "Capitals & Currencies: Countries & Capitals (India - New Delhi, USA - Washington D.C., UK - London, China - Beijing, France - Paris, Russia - Moscow, Japan - Tokyo, Germany - Berlin, Italy - Rome, Canada - Ottawa, Australia - Canberra, Brazil - Brasilia, South Africa - Cape Town, Egypt - Cairo, Saudi Arabia - Riyadh, UAE - Abu Dhabi, Pakistan - Islamabad, Bangladesh - Dhaka, Afghanistan - Kabul, Nepal - Kathmandu, Bhutan - Thimphu, Myanmar - Naypyidaw, Sri Lanka - Sri Jayawardenepura Kotte (Administrative), Colombo (Commercial), Maldives - Male, Indonesia - Jakarta, Philippines - Manila, Vietnam - Hanoi, Thailand - Bangkok, Malaysia - Kuala Lumpur, Singapore - Singapore, South Korea - Seoul, North Korea - Pyongyang, Turkey - Ankara, Iran - Tehran, Iraq - Baghdad, Syria - Damascus, Israel - Jerusalem, Jordan - Amman, Lebanon - Beirut, Oman - Muscat, Yemen - Sana'a, Qatar - Doha, Kuwait - Kuwait City, Bahrain - Manama, Kazakhstan - Astana, Uzbekistan - Tashkent, Turkmenistan - Ashgabat, Tajikistan - Dushanbe, Kyrgyzstan - Bishkek, Mongolia - Ulaanbaatar, Algeria - Algiers, Morocco - Rabat, Tunisia - Tunis, Libya - Tripoli, Sudan - Khartoum, South Sudan - Juba, Ethiopia - Addis Ababa, Eritrea - Asmara, Somalia - Mogadishu, Kenya - Nairobi, Tanzania - Dodoma, Uganda - Kampala, Rwanda - Kigali, DRC - Kinshasa, Republic of Congo - Brazzaville, Zambia - Lusaka, Zimbabwe - Harare, Malawi - Lilongwe, Mozambique - Maputo, Angola - Luanda, Namibia - Windhoek, Botswana - Gaborone, Ghana - Accra, Nigeria - Abuja, Senegal - Dakar, Mali - Bamako, Peru - Lima, Argentina - Buenos Aires, Chile - Santiago, Colombia - Bogota, Venezuela - Caracas, Mexico - Mexico City, Cuba - Havana), Countries & Currencies (India - Rupee, USA - Dollar ($), UK - Pound Sterling (£), Europe - Euro (€), Japan - Yen (¥), China - Yuan (CN¥), Russia - Ruble (RUB), Brazil - Real (R$), Australia - Australian Dollar (AUD), Canada - Canadian Dollar (CAD), Switzerland - Swiss Franc (CHF), South Africa - Rand (ZAR), Saudi Arabia - Riyal (SAR), UAE - Dirham (AED), Pakistan - Rupee (PKR), Bangladesh - Taka (BDT), Nepal - Rupee (NPR), Sri Lanka - Rupee (LKR), Singapore - Singapore Dollar (SGD), Malaysia - Ringgit (MYR), Indonesia - Rupiah (IDR), Thailand - Baht (THB), Philippines - Peso (PHP), Vietnam - Dong (VND), South Korea - Won (KRW), Turkey - Lira (TRY), Iran - Rial (IRR), Iraq - Dinar (IQD), Israel - New Shekel (ILS), Egypt - Pound (EGP), Nigeria - Naira (NGN), Kenya - Shilling (KES), Tanzania - Shilling (TZS), Argentina - Peso (ARS), Chile - Peso (CLP), Colombia - Peso (COP), Mexico - Peso (MXN), New Zealand - NZ Dollar (NZD), Norway - Krone (NOK), Sweden - Krona (SEK), Denmark - Krone (DKK), Iceland - Krona (ISK), Hungary - Forint (HUF), Poland - Zloty (PLN), Czech Republic - Koruna (CZK)",
      "Important Days: National (Republic Day - Jan 26 (1950), Independence Day - Aug 15 (1947), Gandhi Jayanti - Oct 2, Ambedkar Jayanti - April 14, Constitution Day - Nov 26), International (New Year's Day - Jan 1, International Women's Day - March 8, International Day of Happiness - March 20, World Water Day - March 22, World Health Day - April 7, Earth Day - April 22, International Labour Day - May 1, World Environment Day - June 5, International Day of Yoga - June 21, World Population Day - July 11, International Day of Friendship - July 30, Hiroshima Day - Aug 6, World Photography Day - Aug 19, International Day of Peace - Sept 21, World Tourism Day - Sept 27, World Mental Health Day - Oct 10, United Nations Day - Oct 24, World AIDS Day - Dec 1, International Day of Persons with Disabilities - Dec 3, Human Rights Day - Dec 10), Birth/Death Anniversaries (Gandhi Jayanti - Oct 2, Nehru Jayanti - Nov 14 (Children's Day), Subhash Chandra Bose Jayanti - Jan 23, Bhagat Singh - Sep 28, Sardar Patel Jayanti - Oct 31, Ambedkar Jayanti - April 14, Shivaji Jayanti - Feb 19, Swami Vivekananda Jayanti - Jan 12 (Youth Day), Guru Nanak Jayanti - Kartik Purnima, Ashoka Jayanti, Buddha Jayanti - Vesak Purnima, Jinnah's Birth - Dec 25, Maulana Abul Kalam Azad Jayanti - Nov 11, Dr. B.R. Ambedkar's Death - Dec 6 (Mahaparinirvana Diwas), Gandhi's Death - Jan 30 (Martyrs' Day), Tilak Death - Aug 1, Lala Lajpat Rai Death - Nov 17, Bhagat Singh's Death - March 23)"
    ]
  },
  57: {
    title: "Static GK: Awards, UNESCO Sites & Current Affairs Overview",
    topics: [
      "Awards & Honours: Bharat Ratna (Highest Civilian Award - 1954 - Arts, Literature, Science, Public Services - 48 Recipients - Sachin Tendulkar (2014), Prof. C.N.R. Rao (2014), Atal Bihari Vajpayee (2015), Madan Mohan Malaviya (2015), Nanaji Deshmukh (2019), Bhupen Hazarika (2019), Pranab Mukherjee (2019), Lata Mangeshkar (2001), A.P.J. Abdul Kalam (1997), Nelson Mandela (1990), Mother Teresa (1980)), Padma Awards (Padma Vibhushan - Second Highest - 1954, Padma Bhushan - Third Highest, Padma Shri - Fourth Highest - 1954), Gallantry Awards (Param Vir Chakra - Highest Wartime Gallantry - 1950 - Maj. Somnath Sharma, Maj. Somnath Sharma, Hav. Abdul Hamid, Flying Officer Nirmal Jit Singh Sekhon, L/Nk. Albert Ekka, Maj. Arun Khetarpal, Capt. Vikram Batra, Lt. Manoj Kumar Pandey - 21 Recipients), Ashok Chakra (Highest Peacetime Gallantry - 1950 - Hemu (2003), Rakesh Sharma (1984), N.C. Chatterjee), Nobel Prize (Categories - Peace, Literature, Chemistry, Physics, Medicine, Economics - First Nobel - 1901 - Alfred Nobel - 6 Categories - India Winners - Rabindranath Tagore (1913 - Literature), C.V. Raman (1930 - Physics), Mother Teresa (1979 - Peace), Amartya Sen (1998 - Economics), Kailash Satyarthi (2014 - Peace), Abhijit Banerjee (2019 - Economics)), Oscar (Academy Award - First - 1929 - India Winners - Bhanu Athaiya (1982 - Costume Design), Satyajit Ray (1992 - Honorary), A.R. Rahman (2009 - Music), Resul Pookutty (2009 - Sound), Gulzar (2009 - Music), RRR - Naatu Naatu (2023 - Music), The Elephant Whisperers (2023 - Documentary)), Grammy (Music - India Winners - Ravi Shankar, Zakir Hussain, A.R. Rahman, Pandit Shivkumar Sharma, Ustad Amjad Ali Khan, Ricky Kej, Pt. Vishwa Mohan Bhatt), Booker Prize (Literature - India Winners - Arundhati Roy (1997), Kiran Desai (2006), Aravind Adiga (2008), Salman Rushdie (1981 - Midnight's Children)), Magsaysay Award (Asian Nobel Prize - 'Ramon Magsaysay Award' - India Winners - Vinoba Bhave, Mother Teresa, M.S. Swaminathan, Satyajit Ray, Prakash Amte, Rajendra Singh, Kiran Bedi, Sanjiv Chaturvedi), Khel Ratna, Arjuna, Dronacharya, Dhyan Chand Awards (As Above)",
      "UNESCO World Heritage Sites: Cultural Sites (Taj Mahal (1983 - Agra, UP), Agra Fort (1983), Ajanta Caves (1983 - Maharashtra), Ellora Caves (1983), Elephanta Caves (1987 - Mumbai), Ellora - Kailasa Temple, Fatehpur Sikri (1986 - Agra), Hampi (1986 - Karnataka), Khajuraho (1986 - MP), Mahabalipuram (1984 - Tamil Nadu), Pattadakal (1987 - Karnataka), Sanchi (1989 - MP), Qutub Minar (1993 - Delhi), Humayun's Tomb (1993 - Delhi), Mountain Railways of India (Darjeeling Himalayan Railway - 1999, Nilgiri Mountain Railway - 2005, Kalka-Shimla Railway - 2008), Chhatrapati Shivaji Terminus (2004 - Mumbai), Champaner-Pavagadh Archaeological Park (2004 - Gujarat), Red Fort (2007 - Delhi), Jantar Mantar (2010 - Delhi), Hill Forts of Rajasthan (2013 - Chittorgarh, Kumbhalgarh, Jaisalmer, Ranthambore, Gagron), Rani ki Vav (2014 - Gujarat), Great Living Chola Temples (1987 - Brihadeshwara, Gangaikondacholapuram, Airavatesvara), Victorian Gothic and Art Deco Ensembles of Mumbai (2018), Jaipur City (2019), Kakatiya Rudreshwara (Ramappa) Temple (2021 - Telangana), Dholavira (2021 - Gujarat), Santiniketan (2023 - Bengal), Sacred Ensembles of Hoysalas (2023 - Karnataka)), Natural Sites (Kaziranga National Park (1985 - Assam), Manas Wildlife Sanctuary (1985), Keoladeo National Park (1985 - Rajasthan), Nanda Devi National Park (1988 - Uttarakhand), Sundarbans National Park (1987 - West Bengal), Western Ghats (2012 - Karnataka, Kerala, Tamil Nadu, Maharashtra), Great Himalayan National Park (2014 - Himachal), Sundarbans, Valley of Flowers (2005 - Uttarakhand), Grand Canyon (USA), Great Barrier Reef (Australia), Iguazu Falls (Argentina/Brazil), Pantanal (Brazil), Galapagos Islands (Ecuador)), Mixed Sites (Khangchendzonga National Park (2016 - Sikkim))",
      "Current Affairs Overview: National Affairs (Cabinet Approvals, Government Schemes - PM Awas Yojana, PM-KISAN, PMFBY, PM Mudra Yojana, PM JAN DHAN, PM UJJWALA, PM SVANidhi, PM Gati Shakti, National Infrastructure Pipeline; New Appointments - Governors, Chief Ministers, Secretaries, Ambassadors, High Commissioners; Resignations & Demotions; Major Judgements (Supreme Court/High Court); Union Budget Highlights; Economic Survey Highlights)", "International Affairs (Summits & Conferences - G20 (India Hosted 2023 - New Delhi), BRICS, SCO, SAARC, G7, ASEAN, UN General Assembly, COP, WTO, WEF Davos; India & Bilateral Relations (USA, Russia, China, Pakistan, Bangladesh, Nepal, Sri Lanka, Maldives, Myanmar, UAE, Saudi Arabia, Israel, Japan, Australia, UK, France, Germany); Important Treaties & Agreements (IAEA, Comprehensive Nuclear-Test-Ban Treaty, RCEP, IPEF, India-UK Trade Deal, India-US Nuclear Deal, India-Australia, India-EFTA); World Bank/IMF Reports (GDP Growth, Inflation, Global Economic Outlook, Poverty, Inequality))", "Defence (New Inductions - Aircraft (Rafale, Tejas), Ships (INS Vikrant - Indigenous Aircraft Carrier - 2022), Missiles (Brahmos, Agni, Prithvi, Akash, Nag, DRDO), Submarines (INS Arihant - Nuclear Submarine - 2016), Artillery (Dhanush), Helicopters (Dhruv, LCH, ALH); Defence Deals (India-France (Rafale, Scorpene), India-USA (Predator Drones, MQ-9B, GE F414 Engine, C-17, C-130J, Chinook, Apache), India-Russia (S-400 Air Defense, AK-203, Su-30MKI, T-90 Tanks, Kamov); Exercises (India with Other Countries - Malabar (USA/Japan/Australia), Yudh Abhyas (USA), Nomadic Elephant (Mongolia), Indra (Russia), Surya Kiran (Nepal), Al Nagah (Oman), Garuda Shakti (Indonesia), Agni Warrior (Singapore)); Major Appointments (CDS - Chief of Defence Staff, Army Chief, Navy Chief, Air Force Chief, DRDO Chief))", "Science & Technology (ISRO Missions - Chandrayaan-1 (2008), Chandrayaan-2 (2019), Chandrayaan-3 (2023 - Soft Landing on Moon), Gaganyaan (2025 - Manned Mission), Aditya-L1 (2023 - Solar Mission), Mangalyaan (Mars Orbiter Mission - 2014 - First Asian Country to Reach Mars Orbit), SSLV, PSLV, GSLV, GSAT, Navigation with Indian Constellation (NavIC); New Spacecrafts & Satellites (GSAT-7A, GSAT-30, EOS-01, CMS-01, GISAT-1); New Discoveries/Inventions (COVID-19 Vaccines - Covaxin (Bharat Biotech), Covishield (Serum Institute), mRNA Vaccines, AI, Quantum Computing, CRISPR, Robotics, Drones); Health Sector (Vaccines, Drugs, National Health Mission, Ayushman Bharat, PM Jan Arogya Yojana, National Digital Health Mission, e-Sanjeevani, Aarogya Setu))", "Environment & Climate (Climate Summits (COP - 26 Glasgow (2021), 27 Sharm El-Sheikh (2022), 28 Dubai (2023), 29 Baku (2024); IPCC Reports (AR6 - 2021-23 - Impacts of Climate Change, Mitigation); New Species Discoveries, Conservation Efforts (Project Tiger, Project Elephant, Project Dolphin, Project Lion, Project Sea Turtle, Project Snow Leopard; National Clean Air Programme (NCAP), National Action Plan on Climate Change (NAPCC - 8 Missions - Solar, Energy Efficiency, Water, Himalayan Ecosystem, Green India, Sustainable Agriculture, National Mission on Climate Change, National Mission for Enhanced Energy Efficiency), Green India Mission, Mangrove Initiative for Shoreline Habitats & Tangible Incomes (MISHTI), Green Credit Programme))", "Sports (World Cups/Championships (Winners - ICC Cricket World Cup 2023 - Australia, ICC T20 World Cup 2024 - India, FIFA World Cup 2022 - Argentina, FIFA Women's World Cup 2023 - Spain, Asian Games 2022 (Held 2023) - India's Best Performance - 107 Medals, Commonwealth Games 2022 - India - 61 Medals, Asian Cup, Thomas Cup (Badminton) - India 2022, World Chess Championship 2023 - Ding Liren, Women's Chess Championship 2023 - Ju Wenjun), Major Tournaments (India's Performance, Records Broken - Neeraj Chopra, P.V. Sindhu, Mirabai Chanu, Lakshya Sen, Satwiksairaj Rankireddy-Chirag Shetty), Retirements & Appointments (Coaches, Captains, Selectors, Sports Federations))", "Important Person in News (Birth/Death Anniversaries - Notable Personalities, Awards (Nobel, Oscar, Bharat Ratna, Padma Awards, Gallantry Awards, Sports Awards, Film Awards), New Appointments (UN/WB/IMF/WHO/UNESCO/Commonwealth), Political Appointments (Prime Ministers, Presidents, Chief Ministers, Governors, Cabinet Secretaries, Ambassadors, High Commissioners))", "Economy & Business (RBI Policy Rates (Repo, Reverse Repo, CRR, SLR, MSF), Mergers & Acquisitions (PSU Banks Merger - 2019, 2020, 2021; Corporate Mergers - HDFC-HDFC Bank, Reliance-Future Group, TCS-CMC, Infosys-Agile, etc.), New Schemes (MSME Schemes, Agriculture Schemes, Startup India, Digital India, Skill India, PM Gati Shakti), Company Performance (Profit/Loss, Valuation), IPOs (Initial Public Offerings) & Stock Market (Sensex, Nifty, IPO Activity, Fund Flows, FIIs, DIIs))", "Obituaries (Last 6 Months - Famous Personalities Passed Away - Former PMs, Presidents, Chief Ministers, Governors, Film Personalities, Sports Personalities, Scientists, Writers, Social Workers, Industrialists - Their Contributions and Legacies) - State, Capital, Chief Minister, Governor (All 28 States & 8 UTs with Current Holders), Central Ministers & Portfolios (Current Cabinet Ministers, Ministers of State, Portfolios), Newly Appointed Ambassadors/High Commissioners (Current Diplomatic Appointments - Important Countries - USA, UK, Russia, China, France, Germany, Japan, Pakistan, Bangladesh, Nepal, Sri Lanka, Afghanistan, Iran, Iraq, UAE, Saudi Arabia, Israel, Australia, Canada, UN, WHO, IMF, World Bank, G20, BRICS, SCO, SAARC, ASEAN, Commonwealth, Human Rights Commission)"
    ]
  }
};

export const TOTAL_CHUNKS = Object.keys(chunkTopics).length;

/**
 * Returns the prompt string based on the chunk number and config.
 * 
 * @param {number} chunk - The current chunk number (1-based index)
 * @param {object} config - Configuration object
 * @param {number} questionsPerChunk - Unused here, but kept for signature compatibility
 * @returns {string} The fully compiled prompt text
 */
export function getPromptForChunk(chunk, config, questionsPerChunk) {
  const currentChunk = chunkTopics[chunk] || {
    title: `General Awareness Concepts - Part ${chunk}`,
    topics: ["General Awareness and its Applications"]
  };

  const topicListString = currentChunk.topics.join('\n');

  return `You are a world-class General Awareness professor writing a comprehensive, premium textbook for elite students preparing for highly competitive exams (such as SSC CGL, CHSL, Bank PO, CDS, and NDA). Your goal is to write a deeply educational, realistic, and highly authoritative chapter that feels entirely human-written, avoiding all standard AI clichés and generic summaries.

# WRITING STYLE & HUMAN VOICE GUIDELINES
1. **Write like a Veteran Human Educator**: Use a tone that is authoritative, engaging, direct, and intellectually stimulating. Be passionate about History, Polity, Geography, Economy, Science, and Static GK. Teach the underlying connections, cause-and-effect relationships, and mental models for mastering General Awareness.
2. **Avoid AI Clichés & Buzzwords**: Do NOT use phrases like "Let's dive in," "In conclusion," "It is crucial to remember," "Essentially," "Moreover," "Furthermore," "Let's look at an example," or robotic transitions. Start directly with the content. Do not write any conversational preamble or postscript (e.g. "Sure, here is your chapter").
3. **Provide Immense Depth**: Avoid shallow definitions. For every sub-topic listed, explain the logical mechanics in full, the standard facts (such as exact dates, key figures, constitutional articles, geographical data, and economic indicators), and the exact step-by-step cognitive steps required to memorize and apply them effectively for exams.
4. **Reveal the Traps**: Discuss common student misconceptions, exam traps, and cognitive biases that lead to wrong answers, explaining exactly how to identify and avoid them. Include specific SSC (Staff Selection Commission) exam patterns and tricks.

# SPECIFIC DIALECT FORMATTING RULES
You must output ONLY valid text in our custom Markdown dialect. Follow these strict formatting rules exactly:

1. **Page Title**: Start the document with exactly one \`# [Title]\` (use the chapter name: "${currentChunk.title}").
2. **Subtitle**: Immediately follow with \`> [Subtitle]\` (an intellectually rich, engaging, human-sounding subtitle summarizing the chapter).
3. **Chapters**: Group main topics using \`## Chapter ${chunk}: [Chapter Name]\`.
4. **Sections**: Break chapters into sections using \`### Section [X] | [Section Name]\`.
5. **Text Formatting**:
   - Use \`**bold**\` for emphasis.
   - Use \`*italic*\` for terms.
   - Use \`=highlight=\` for key facts, dates, articles, or crucial formulas (e.g. \`=The Battle of Plassey was fought in 1757=\`).
6. **Lists**: Use \`- \` for bullet points.
7. **Tables**: Use standard markdown tables (e.g., \`| Col1 | Col2 |\`). Use tables for constitutional schedules, amendments, lists of planets, crops, etc.
8. **Important Alerts**: For crucial tips, rules, or warning traps, wrap them in:
   [alert type="success"]
   **Important Fact:** ...
   [/alert]
   *(Valid types: success, warning, info, danger)*
9. **Solved Examples**: When you see a solved General Awareness question, format it exactly as:
   [example]
   **Question:** ...
   **Solution:** ...
   [/example]
10. **Flashcards (Multiple per block)**: If there are terms, dates, persons, facts, or definitions to memorize, group them into a single flashcard block:
    [flashcards title="[Topic]"]
    | [Front Term 1] | [Back Definition 1] |
    | [Front Term 2] | [Back Definition 2] |
    [/flashcards]
11. **Quizzes (Multiple questions per block)**: For quizzes, group 2-5 questions together using the \`[quiz]\` shortcode and \`Q:\` for each question exactly like this:
    [quiz title="[Quiz Title]"]
    Q: [Question 1 text]
    - A) [Option 1]
    - B) [Option 2] (Correct: [Optional feedback])
    - C) [Option 3]
    - D) [Option 4]
    
    Q: [Question 2 text]
    - A) [Option 1] (Correct)
    - B) [Option 2]
    - C) [Option 3]
    - D) [Option 4]
    [/quiz]

Do not use any standard HTML tags like \`<div>\` or \`<span>\`. Only output this custom Markdown format.
Do not write any conversational text or preamble/postscript before or after the Markdown document. Start directly with the \`# [Title]\` line and end with the last \`[/quiz]\` or content block.

**Here are the raw topics to convert and cover in this chapter:**
${topicListString}`;
}

/**
 * Returns a safe, descriptive filename based on the chapter title.
 * 
 * @param {number} chunk - The current chunk number
 * @returns {string} - A clean filename like "01_history_prehistoric_ivc.md"
 */
export function getFilenameForChunk(chunk) {
  const currentChunk = chunkTopics[chunk];
  if (!currentChunk) return `chapter_${chunk}.json`;
  
  // Format chunk number with leading zero if needed, e.g., "01"
  const prefix = chunk.toString().padStart(2, '0');
  
  // Clean the title to make it a safe, consistent filename
  const cleanTitle = currentChunk.title
    .toLowerCase()
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '') // remove special characters
    .trim()
    .replace(/\s+/g, '_'); // replace spaces with underscores
    
  return `${prefix}_${cleanTitle}.json`;
}