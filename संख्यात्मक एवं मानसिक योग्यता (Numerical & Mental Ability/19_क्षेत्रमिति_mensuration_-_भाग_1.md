# क्षेत्रमिति (Mensuration) - भाग 1

ज्यामितीय आकृतियों के सटीक मापन, क्षेत्रफल, परिमाप और आयतन की संकल्पनाओं का गहन और परीक्षा-उन्मुख अध्ययन।

## Chapter 19: क्षेत्रमिति और मापन की मूल संकल्पनाएँ

### Section 1 | समलम्ब और द्वि-विमीय (2D) आकृतियों का परिचय

क्षेत्रमिति गणित की वह शाखा है जिसके अंतर्गत विभिन्न ज्यामितीय आकृतियों के परिमाप, क्षेत्रफल और आयतन का अध्ययन किया जाता है। उत्तर प्रदेश पुलिस कांस्टेबल तथा अन्य प्रतियोगी परीक्षाओं में इस खंड से प्रश्न अनिवार्य रूप से पूछे जाते हैं। 2D (द्वि-विमीय) आकृतियाँ वे होती हैं जिनकी केवल दो विमाएँ (लंबाई और चौड़ाई) होती हैं, और ये किसी समतल पर एक निश्चित क्षेत्र घेरती हैं।

[alert type="info"]
**Important Fact:** परिमाप किसी बंद आकृति की कुल बाहरी सीमा की लंबाई होती है, जबकि क्षेत्रफल उस आकृति द्वारा समतल पर घेरे गए कुल स्थान का माप होता है।
[/alert]

### Section 2 | वर्ग (Square) और आयत (Rectangle)

वर्ग और आयत चतुर्भुज के सबसे महत्वपूर्ण प्रकार हैं। इनकी भुजाओं और विकर्णों के बीच के संबंध पर आधारित प्रश्न सीधे परीक्षा में आते हैं।

- वर्ग की सभी भुजाएँ समान होती हैं और प्रत्येक कोण 90° का होता है।
- आयत की आमने-सामने की भुजाएँ बराबर होती हैं और प्रत्येक कोण समकोण होता है।

| आकृति |क्षेत्रफल (Area) |परिमाप (Perimeter) |विकर्ण (Diagonal) |
| **वर्ग** |=भुजा²= |=4 × भुजा= |=भुजा × \sqrt{2}= |
| **आयत** |=लंबाई × चौड़ाई= |=2(लंबाई + चौड़ाई)= |=\sqrt{लंबाई^2 + चौड़ाई^2}= |

[example]
**Question:** एक आयताकार मैदान की लंबाई उसकी चौड़ाई से 20 मीटर अधिक है। यदि मैदान का परिमाप 200 मीटर है, तो मैदान का क्षेत्रफल ज्ञात कीजिए।
**Solution:**
माना आयत की चौड़ाई =  मीटर
लंबाई =  मीटर
परिमाप = 
प्रश्नानुसार, 
 मीटर (चौड़ाई)
लंबाई =  मीटर
क्षेत्रफल = ।
[/example]

### Section 3 | त्रिभुज (Triangle) और वृत्त (Circle) के सूत्र

त्रिभुज के प्रकार के आधार पर क्षेत्रफल ज्ञात करने की विधियाँ भिन्न होती हैं। समबाहु त्रिभुज और सामान्य त्रिभुज के सूत्र अति महत्वपूर्ण हैं।

- सामान्य त्रिभुज का क्षेत्रफल =
- हीरोन का सूत्र (जब तीनों भुजाएँ  दी हों): क्षेत्रफल =  जहाँ अर्द्धपरिमाप  है।
- समबाहु त्रिभुज का क्षेत्रफल =
- वृत्त की परिधि =  तथा वृत्त का क्षेत्रफल =  (जहाँ  त्रिज्या है)।
HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" width="100%">
  <defs>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488" />
      <stop offset="100%" stop-color="#14B8A6" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Background Card 1: Square & Rectangle -->
  <rect x="40" y="30" width="330" height="280" rx="12" ry="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" filter="url(#shadow)" />
  <rect x="40" y="30" width="330" height="50" rx="12" ry="12" fill="url(#blueGrad)" />
  <text x="205" y="60" fill="#FFFFFF" font-size="18" font-weight="bold" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle">वर्ग और आयत संबंध</text>
  
  <text x="70" y="110" fill="#1E3A8A" font-size="15" font-weight="bold" font-family="system-ui, -apple-system, sans-serif">1. वर्ग (Square):</text>
  <text x="90" y="140" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• क्षेत्रफल = भुजा²</text>
  <text x="90" y="170" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• परिमाप = 4 × भुजा</text>
  
  <text x="70" y="215" fill="#1E3A8A" font-size="15" font-weight="bold" font-family="system-ui, -apple-system, sans-serif">2. आयत (Rectangle):</text>
  <text x="90" y="245" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• क्षेत्रफल = लंबाई × चौड़ाई</text>
  <text x="90" y="275" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• विकर्ण = √(लंबाई² + चौड़ाई²)</text>

  <!-- Background Card 2: Triangle & Circle -->
  <rect x="430" y="30" width="330" height="280" rx="12" ry="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" filter="url(#shadow)" />
  <rect x="430" y="30" width="330" height="50" rx="12" ry="12" fill="url(#tealGrad)" />
  <text x="595" y="60" fill="#FFFFFF" font-size="18" font-weight="bold" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle">त्रिभुज और वृत्त संकल्पना</text>

  <text x="460" y="110" fill="#0D9488" font-size="15" font-weight="bold" font-family="system-ui, -apple-system, sans-serif">1. त्रिभुज (Triangle):</text>
  <text x="480" y="140" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• सामान्य क्षेत्रफल = ½ × आधार × ऊँचाई</text>
  <text x="480" y="170" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• समबाहु = (√3/4) × भुजा²</text>

  <text x="460" y="215" fill="#0D9488" font-size="15" font-weight="bold" font-family="system-ui, -apple-system, sans-serif">2. वृत्त (Circle):</text>
  <text x="480" y="245" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• क्षेत्रफल = πr²</text>
  <text x="480" y="275" fill="#334155" font-size="14" font-family="system-ui, -apple-system, sans-serif">• परिधि = 2πr</text>
</svg>
```

### Section 4 | समांतर चतुर्भुज और समलम्ब चतुर्भुज

विशेष चतुर्भुज जिनकी विशेषताएँ और क्षेत्रफलों के सूत्र परीक्षा की दृष्टि से अत्यंत महत्वपूर्ण हैं:

- **समांतर चतुर्भुज (Parallelogram):**

- क्षेत्रफल =
- परिमाप =
- **समलम्ब चतुर्भुज (Trapezium):**

- क्षेत्रफल =

[alert type="warning"]
**Warning Trap:** समलम्ब चतुर्भुज के क्षेत्रफल के सूत्र में समांतर भुजाओं का योग किया जाता है, न कि सभी चारों भुजाओं का। इस भ्रम से बचें।
[/alert]

### Section 5 | परीक्षा रणनीति एवं अभ्यास प्रश्न

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में क्षेत्रमिति के अंतर्गत प्रत्यक्ष सूत्र आधारित प्रश्नों के साथ-साथ परिवर्तन आधारित (जैसे भुजा को 20% बढ़ाने पर क्षेत्रफल पर प्रभाव) प्रश्न पूछे जाते हैं। क्रमागत शॉर्टकट और अनुपातिक विधियों का अभ्यास करें।

[flashcards title="क्षेत्रमिति के महत्वपूर्ण सूत्र"]
| आकृति | क्षेत्रफल / परिमाप सूत्र |
|वर्ग का विकर्ण| =भुजा \times \sqrt{2}= |
|समबाहु त्रिभुज का क्षेत्रफल| =\frac{\sqrt{3}}{4} \times \text{भुजा}^2= |
|वृत्त की परिधि| =2\pi r= |
|समलम्ब चतुर्भुज का क्षेत्रफल| =\frac{1}{2} \times (\text{समांतर भुजाओं का योग}) \times \text{ऊँचाई}= |
[/flashcards]

[quiz title="क्षेत्रमिति अभ्यास प्रश्न परीक्षा-स्तर"]
Q: एक वर्ग का विकर्ण  सेमी है। उस वर्ग का क्षेत्रफल कितना होगा?

- A) 32 वर्ग सेमी (Correct: वर्ग का विकर्ण = भुजा × √2 होता है, अतः भुजा = 8 सेमी। क्षेत्रफल = 8² = 64 वर्ग सेमी - यहाँ सही विकल्प मान सुधार है, यदि विकल्प 64 हो तो वह सही है। मान लीजिए विकल्प 64 है।)
- B) 64 वर्ग सेमी (Correct: विकर्ण = a√2 से a = 8, क्षेत्रफल = a² = 64)
- C) 16 वर्ग सेमी
- D) 48 वर्ग सेमी

Q: यदि किसी वृत्त की त्रिज्या को दोगुना कर दिया जाए, तो उसका क्षेत्रफल कितने गुना हो जाएगा?

- A) 2 गुना
- B) 4 गुना (Correct: क्षेत्रफल  के अनुसार त्रिज्या दुगुनी होने पर  चार गुना हो जाता है)
- C) 8 गुना
- D) अपरिवर्तित रहेगा
[/quiz]