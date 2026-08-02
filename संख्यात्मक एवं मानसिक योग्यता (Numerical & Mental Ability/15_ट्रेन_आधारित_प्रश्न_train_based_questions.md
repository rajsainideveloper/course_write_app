# ट्रेन आधारित प्रश्न (Train Based Questions)

गति, समय और दूरी की संकल्पना पर आधारित यह अध्याय उत्तर प्रदेश पुलिस कांस्टेबल और अन्य प्रतियोगी परीक्षाओं की रीढ़ है, जिसमें सापेक्ष गति और ट्रेन की लंबाई के व्यावहारिक अनुप्रयोगों का गहन अध्ययन कराया जाता है।

## Chapter 15: ट्रेन आधारित प्रश्न एवं सापेक्ष गति

### Section 1 | बुनियादी संकल्पनाएँ एवं इकाइयाँ (Basic Concepts & Units)

ट्रेन के प्रश्नों को हल करने के लिए गति (Speed), समय (Time) और दूरी (Distance) के मूल सिद्धांतों के साथ-साथ इकाइयों के रूपांतरण पर कमांड होना अनिवार्य है।

- **चाल, दूरी और समय का संबंध**:
- **किमी/घंटा से मीटर/सेकेंड में परिवर्तन**: जब चाल को किमी/घंटा (km/h) से मीटर/सेकेंड (m/s) में बदलना हो, तो **** से गुणा करते हैं।
- **मीटर/सेकेंड से किमी/घंटा में परिवर्तन**: जब चाल को मीटर/सेकेंड से किमी/घंटा में बदलना हो, तो **** से गुणा करते हैं।

[alert type="success"]
**Important Fact:** ट्रेन के प्रश्नों में कुल तय की गई दूरी हमेशा **ट्रेन की लंबाई** और **पार की जाने वाली वस्तु (प्लेटफॉर्म, पुल, सुरंग या दूसरी ट्रेन) की लंबाई के योग** के बराबर होती है, बशर्ते पार की जाने वाली वस्तु की लंबाई नगण्य (जैसे खंभा या व्यक्ति) न हो।
[/alert]

### Section 2 | खंभे, पेड़ और स्थिर व्यक्ति को पार करना (Pole, Tree & Static Person)

जब एक ट्रेन किसी खंभे, पेड़ या पटरी के पास खड़े व्यक्ति को पार करती है, तो ट्रेन द्वारा चली गई कुल दूरी **स्वयं ट्रेन की लंबाई** के बराबर होती है क्योंकि खंभे या पेड़ की अपनी लंबाई नगण्य मानी जाती है।

- **सूत्र**:

[example]
**Question:** 120 मीटर लंबी एक ट्रेन 54 किमी/घंटा की चाल से चल रही है। पटरी के पास खड़े एक खंभे को पार करने में उसे कितना समय लगेगा?
**Solution:**

- ट्रेन की चाल को मीटर/सेकेंड में बदलें:
- सूत्र का प्रयोग करें: ।
उत्तर: **8 सेकेंड**।
[/example]

### Section 3 | प्लेटफॉर्म, पुल और सुरंग को पार करना (Platform, Bridge & Tunnel)

जब ट्रेन किसी ऐसे ऑब्जेक्ट को पार करती है जिसकी अपनी लंबाई होती है (जैसे प्लेटफॉर्म, पुल या सुरंग), तो कुल दूरी ट्रेन की लंबाई और उस वस्तु की लंबाई का योग होती है।

- **सूत्र**:

[example]
**Question:** 250 मीटर लंबी एक ट्रेन 72 किमी/घंटा की चाल से दौड़ रही है। वह 150 मीटर लंबे प्लेटफॉर्म को पार करने में कितना समय लेगी?
**Solution:**

- कुल दूरी = ट्रेन की लंबाई + प्लेटफॉर्म की लंबाई =
- चाल =
- समय = ।
उत्तर: **20 सेकेंड**।
[/example]

### Section 4 | दो ट्रेनों की गति: विपरीत और समान दिशा (Relative Speed)

जब दो वस्तुएं गतिमान हों, तो सापेक्ष गति (Relative Speed) का कॉन्सेप्ट लागू होता है।

- **विपरीत दिशा (Opposite Direction)**: यदि दो ट्रेनें एक-दूसरे की तरफ विपरीत दिशा में आ रही हैं, तो उनकी सापेक्ष गति दोनों की चालों का योग होगी।
- **समान दिशा (Same Direction)**: यदि दो ट्रेनें एक ही दिशा में चल रही हैं, तो उनकी सापेक्ष गति दोनों की चालों का अंतर होगी।
HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" width="100%">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0D9488" />
      <stop offset="100%" stop-color="#14B8A6" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="800" height="300" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>

  <!-- Title -->
  <text x="400" y="35" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="bold" fill="#1E3A8A" text-anchor="middle">सापेक्ष गति (Relative Speed) का विजुअल मॉडल</text>

  <!-- Opposite Direction Box -->
  <rect x="50" y="70" width="320" height="190" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="210" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#0D9488" text-anchor="middle">विपरीत दिशा (Opposite)</text>
  <text x="210" y="130" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155" text-anchor="middle">ट्रेन 1 (S1) ──►  ◄── ट्रेन 2 (S2)</text>
  <rect x="80" y="150" width="260" height="40" rx="6" fill="url(#blueGrad)"/>
  <text x="210" y="175" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">सापेक्ष गति = S1 + S2</text>
  <text x="210" y="225" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#64748B" text-anchor="middle">जुड़ जाती हैं चालें</text>

  <!-- Same Direction Box -->
  <rect x="430" y="70" width="320" height="190" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
  <text x="590" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#059669" text-anchor="middle">समान दिशा (Same Direction)</text>
  <text x="590" y="130" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155" text-anchor="middle">ट्रेन 1 (S1) ──►    ट्रेन 2 (S2) ──►</text>
  <rect x="460" y="150" width="260" height="40" rx="6" fill="url(#tealGrad)"/>
  <text x="590" y="175" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">सापेक्ष गति = S1 - S2</text>
  <text x="590" y="225" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#64748B" text-anchor="middle">बड़ी चाल से छोटी चाल घटती है</text>
</svg>
```

### Section 5 | परीक्षा के लिए महत्वपूर्ण सूत्र और फ्लैशकार्ड

[flashcards title="ट्रेन के महत्वपूर्ण सूत्र"]

| स्थिति (Scenario) |सूत्र (Formula) |
| खंभे को पार करना | |
| प्लेटफॉर्म को पार करना | |
| विपरीत दिशा में दो ट्रेनें | |
| समान दिशा में दो ट्रेनें | |
| किमी/घंटा से मी/सेकेंड | |
| [/flashcards] | |

### Section 6 | परीक्षा अभ्यास क्विज (UP Police Constable Special)

[quiz title="ट्रेन आधारित प्रश्न अभ्यास टेस्ट"]
Q: 150 मीटर लंबी ट्रेन 60 किमी/घंटा की गति से चल रही है। पटري के पास खड़े एक आदमी को पार करने में इसे कितना समय लगेगा?

- A) 8 सेकेंड (Correct: सही उत्तर 9 सेकेंड है,  सेकेंड)
- B) 9 सेकेंड (Correct: सही, चाल = 50/3 मी/से, समय = 150 / (50/3) = 9 सेकेंड)
- C) 10 सेकेंड
- D) 12 सेकेंड

Q: दो ट्रेनें जिनकी लंबाई क्रमशः 200 मीटर तथा 300 मीटर हैं, विपरीत दिशा में 40 किमी/घंटा और 50 किमी/घंटा की चाल से आ रही हैं। वे एक-दूसरे को कितने समय में पार करेंगी?

- A) 10 सेकेंड
- B) 15 सेकेंड
- C) 20 सेकेंड (Correct: कुल लंबाई = 500 मी, सापेक्ष गति = 90 किमी/घंटा = 25 मी/से, समय = 500/25 = 20 सेकेंड)
- D) 25 सेकेंड
[/quiz]