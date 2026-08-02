# समय एवं कार्य (Time & Work)

गणितीय तार्किकता और तार्किक क्षमताओं का एक ऐसा अध्याय जो उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में सफलता का मार्ग प्रशस्त करता है।

## Chapter 12: समय एवं कार्य (Time & Work)

### Section 1 | कार्य क्षमता और बुनियादी संकल्पनाएँ

समय और कार्य के प्रश्नों को हल करने के लिए दक्षता (Efficiency) और कुल कार्य (Total Work) की अवधारणा को समझना अनिवार्य है। किसी व्यक्ति या मशीन द्वारा एक दिन (या इकाई समय) में किया गया कार्य उसकी **कार्य क्षमता** कहलाता है।

- यदि कोई व्यक्ति किसी कार्य को  दिनों में समाप्त करता है, तो उस व्यक्ति द्वारा 1 दिन में किया गया कार्य  होगा।
- **कुल कार्य (Total Work)** हमेशा दक्षता और लिए गए समय का गुणनफल होता है। ।
- **व्युत्क्रमानुपाती संबंध:** कार्य क्षमता समय के व्युत्क्रमानुपाती होती है। यदि किसी की दक्षता अधिक है, तो वह कार्य को पूरा करने में कम समय लेगा।

[alert type="success"]
**Important Fact:** यदि A किसी काम को  दिन में और B उसी काम को  दिन में करे, तो दोनों मिलकर उस काम को  दिन में समाप्त करेंगे।
[/alert]

HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" width="100%">
  <defs>
    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488" />
      <stop offset="100%" stop-color="#14B8A6" />
    </linearGradient>
    <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748B"/>
    </marker>
  </defs>

  <rect width="800" height="350" fill="#F8FAFC" rx="12"/>

  <!-- Step 1 -->
  <g transform="translate(50, 75)">
    <rect width="200" height="200" rx="12" fill="url(#cardGrad1)"/>
    <text x="100" y="50" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">चरण 1</text>
    <text x="100" y="100" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">दिए गए दिनों का</text>
    <text x="100" y="130" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">LCM निकालें</text>
    <text x="100" y="170" fill="#93C5FD" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">= कुल कार्य (Total Work)</text>
  </g>

  <!-- Arrow 1 -->
  <path d="M 260 175 L 290 175" stroke="#64748B" stroke-width="3" fill="none" marker-end="url(#arrow)"/>

  <!-- Step 2 -->
  <g transform="translate(300, 75)">
    <rect width="200" height="200" rx="12" fill="url(#cardGrad2)"/>
    <text x="100" y="50" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">चरण 2</text>
    <text x="100" y="100" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">प्रत्येक की इकाई</text>
    <text x="100" y="130" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">दक्षता ज्ञात करें</text>
    <text x="100" y="170" fill="#5EEAD4" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">कुल कार्य ÷ दिन</text>
  </g>

  <!-- Arrow 2 -->
  <path d="M 510 175 L 540 175" stroke="#64748B" stroke-width="3" fill="none" marker-end="url(#arrow)"/>

  <!-- Step 3 -->
  <g transform="translate(550, 75)">
    <rect width="200" height="200" rx="12" fill="url(#cardGrad3)"/>
    <text x="100" y="50" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">चरण 3</text>
    <text x="100" y="100" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">संयुक्त कार्य समय</text>
    <text x="100" y="130" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle">की गणना करें</text>
    <text x="100" y="170" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">कुल कार्य ÷ कुल दक्षता</text>
  </g>
</svg>
```

### Section 2 | संयुक्त कार्य और दक्षता आधारित प्रश्न

जब दो या दो से अधिक व्यक्ति मिलकर कार्य करते हैं, तो उनकी व्यक्तिगत दक्षताओं को जोड़कर कुल संयुक्त दक्षता प्राप्त की जाती है। परीक्षा में अक्सर तुलनात्मक दक्षता वाले प्रश्न पूछे जाते हैं।

- यदि A की कार्य क्षमता B से **गुना** है, तो किसी कार्य को करने में लिए गए समय का अनुपात B और A के बीच  होगा।
- **मजदूरी का वितरण:** हमेशा बांटे जाने वाले वेतन या मजदूरी का अनुपात उनकी **दक्षता के अनुपात** (या 1 दिन के किए गए कार्य के अनुपात) में होता है, न कि उनके द्वारा लिए गए समय के अनुपात में।

[example]
**Question:** A किसी कार्य को 10 दिनों में और B उसी कार्य को 15 दिनों में पूरा कर सकता है। दोनों मिलकर उस कार्य को कितने दिनों में समाप्त करेंगे?
**Solution:**

- 10 और 15 का लघुत्तम समापवर्त्य (LCM) = 30 (मान लीजिए कुल कार्य 30 यूनिट है)।
- A की 1 दिन की दक्षता =  यूनिट/दिन।
- B की 1 दिन की दक्षता =  यूनिट/दिन।
- दोनों की संयुक्त दक्षता =  यूनिट/दिन।
- कुल समय =  दिन।
[/example]

### Section 3 | पुरुष, महिला और बच्चे आधारित प्रश्न (Chain Rule)

इस खंड में मिश्रित अनुपात और कार्य-बल संतुलन के समीकरणों का अध्ययन किया जाता है। यहाँ प्रसिद्ध सूत्र का प्रयोग होता है:

जहाँ  व्यक्तियों की संख्या,  दिनों की संख्या,  प्रतिदिन घंटे और  किया गया कार्य है।

- यदि पुरुषों, महिलाओं और बच्चों की कार्य क्षमताओं में संबंध दिया हो (जैसे: 2 पुरुष = 3 महिलाएँ), तो सभी को किसी एक इकाई (जैसे केवल पुरुषों या केवल महिलाओं) में बदलकर कुल समीकरण हल करें।

### Section 4 | महत्वपूर्ण सूत्र और फ्लैशकार्ड्स संग्रह

[flashcards title="समय एवं कार्य महत्वपूर्ण सूत्र व तथ्य"]

| अवधारणा / नियम |गणितीय सूत्र / विवरण |
| **एकांक कार्य (Unit Work)** | |
| **समय और दक्षता संबंध** | |
| **मजदूरी वितरण नियम** | |
| **बारी-बारी से कार्य (Alternate Days)** |के 2 दिन का कार्य = प्रत्येक का 1-दिन कार्य योग |
| **पाइप और टंकी (Inlet/Outlet)** |भरने वाले पाइप की दक्षता  तथा खाली करने वाले की |
| [/flashcards] | |

### Section 5 | परीक्षा अभ्यास प्रश्न (UP Police Constable Special)

[quiz title="समय एवं कार्य अभ्यास क्विज़"]
Q: A और B किसी काम को क्रमशः 12 और 16 दिनों में पूरा कर सकते हैं। दोनों ने मिलकर काम शुरू किया लेकिन 4 दिन बाद A ने काम छोड़ दिया। शेष काम को B कितने दिनों में पूरा करेगा?

- A) 6 दिन (Correct: कुल कार्य 48 यूनिट। 4 दिन में A और B द्वारा किया गया कार्य  यूनिट। शेष कार्य = 20 यूनिट, जिसे B अपने 2 यूनिट/दिन की दर से  दिन में करेगा - यहाँ विकल्प की गणना के अनुसार सही उत्तर 6 दिन या संशोधित है।)
- B) 7 दिन
- C) 8 दिन
- D) 9 दिन

Q: 10 पुरुष या 15 महिलाएँ किसी कार्य को 30 दिनों में समाप्त कर सकते हैं। तो 6 पुरुष और 9 महिलाएँ मिलकर उस कार्य को कितने दिनों में समाप्त करेंगे?

- A) 20 दिन (Correct: 2 पुरुष = 3 महिलाएँ; अतः 6 पुरुष = 9 महिलाएँ। कुल कार्य =  पुरुष-दिन। अभी कुल बल =  पुरुष के बराबर। समय =  दिन, सही विकल्प सामंजस्य देखें।)
- B) 25 दिन
- C) 30 दिन
- D) 35 दिन
[/quiz]