# क्षेत्रमिति (Mensuration) - भाग 2 (ठोस आकृतियाँ)

त्रिविमीय (3D) ज्यामितीय आकृतियों के आयतन, पृष्ठीय क्षेत्रफल और विकर्णों की गणना के उन्नत सूत्र और परीक्षा-उन्मुख शॉर्टकट।

## Chapter 20: ठोस आकृतियाँ (Solid Figures)

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में क्षेत्रमिति के अंतर्गत त्रिविमीय (3D) आकृतियों से सीधे सूत्र आधारित और गणनात्मक प्रश्न पूछे जाते हैं। इस अध्याय में घन, घनाभ, बेलन, शंकु और गोले के आयतन तथा पृष्ठीय क्षेत्रफल की गहरी समझ विकसित की जाएगी।

### Section 1 | घन (Cube) और घनाभ (Cuboid)

घन और घनाभ ऐसी आकृतियाँ हैं जिनमें लंबाई, चौड़ाई और ऊँचाई तीनों विमाएँ होती हैं।

घन (Cube)

घन एक ऐसी त्रिविमीय आकृति है जिसकी लंबाई, चौड़ाई और ऊँचाई आपस में समान होती हैं (भुजा = a)।

- =आयतन = a³=
- =संपूर्ण पृष्ठीय क्षेत्रफल = 6a²=
- =विकर्ण = a√3=
घनाभ (Cuboid)

घनाभ में लंबाई (), चौड़ाई () और ऊँचाई () भिन्न-भिन्न होती हैं।

- =आयतन = l × b × h=
- =संपूर्ण पृष्ठीय क्षेत्रफल = 2(lb + bh + hl)=
- =विकर्ण = √(l² + b² + h²)=

[alert type="success"]
**Important Fact:** किसी कमरे के चारों दीवारों का क्षेत्रफल निकालने का सूत्र  होता है, जहाँ  कमरे की ऊँचाई है।
[/alert]

[example]
**Question:** एक 12 सेमी लंबे, 9 सेमी चौड़े और 8 सेमी ऊंचे घनाभ के विकर्ण की लंबाई ज्ञात कीजिए।
**Solution:**
घनाभ का विकर्ण = 
= 
= 
=  = 17 सेमी।
[/example]

### Section 2 | बेलन (Cylinder) और शंकु (Cone)

बेलन (Cylinder)

एक लंब वृत्तीय बेलन की त्रिज्या  और ऊँचाई  होती है।

- =आयतन = \pi r² h=
- =वक्र पृष्ठीय क्षेत्रफल (CSA) = 2 \pi r h=
- =संपूर्ण पृष्ठीय क्षेत्रफल (TSA) = 2 \pi r (r + h)=
शंकु (Cone)

शंकु की त्रिज्या , ऊँचाई  और तिर्यक ऊँचाई  होती है।

- =तिर्यक ऊँचाई (l) = \sqrt{r² + h²}=
- =आयतन = \frac{1}{3} \pi r² h=
- =वक्र पृष्ठीय क्षेत्रफल = \pi r l=
- =संपूर्ण पृष्ठीय क्षेत्रफल = \pi r (r + l)=

### Section 3 | गोला (Sphere)

गोला एक पूर्णतः गोल त्रिविमीय आकृति है जिसकी त्रिज्या  होती है।

- =आयतन = \frac{4}{3} \pi r³=
- =पृष्ठीय क्षेत्रफल = 4 \pi r²=

[flashcards title="ठोस आकृतियों के सूत्र संग्रह"]

| आकृति (Shape) |आयतन (Volume) |संपूर्ण पृष्ठीय क्षेत्रफल (Total Surface Area) |
| **घन (Cube)** |a³ |6a² |
| **घनाभ (Cuboid)** |l × b × h |2(lb + bh + hl) |
| **बेलन (Cylinder)** |\pi r² h |2\pi r(r + h) |
| **शंकु (Cone)** |\frac{1}{3}\pi r² h |\pi r(r + l) |
| **गोला (Sphere)** |\frac{4}{3}\pi r³ |4\pi r² |
| [/flashcards] | | |

### Section 4 | ठोस आकृतियों के वैचारिक आरेख (Visualizing 3D Solids)

नीचे दिया गया आरेख त्रिविमीय आकृतियों और उनके प्रमुख मापदंडों के बीच के संबंध को स्पष्ट करता है:

HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" width="100%">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#0D9488" />
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.2"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="350" fill="#F8FAFC" rx="12"/>

  <!-- Box 1: घन एवं घनाभ -->
  <g transform="translate(40, 40)" filter="url(#shadow)">
    <rect width="210" height="260" rx="10" fill="#ffffff" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="15" y="15" width="180" height="40" rx="6" fill="url(#grad1)"/>
    <text x="105" y="40" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">घन / घनाभ</text>
    <text x="25" y="90" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• विमाएँ: l, b, h</text>
    <text x="25" y="130" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• आयतन = l×b×h</text>
    <text x="25" y="170" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• विकर्ण आधारित प्रश्न</text>
    <text x="25" y="210" fill="#0D9488" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">रिफॉर्मूला: 2(lb+bh+hl)</text>
  </g>

  <!-- Box 2: बेलन एवं शंकु -->
  <g transform="translate(295, 40)" filter="url(#shadow)">
    <rect width="210" height="260" rx="10" fill="#ffffff" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="15" y="15" width="180" height="40" rx="6" fill="url(#grad2)"/>
    <text x="105" y="40" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">बेलन / शंकु</text>
    <text x="25" y="90" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• त्रिज्या (r), ऊँचाई (h)</text>
    <text x="25" y="130" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• शंकु तिर्यक ऊँचाई l</text>
    <text x="25" y="170" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• वक्र पृष्ठीय क्षेत्रफल</text>
    <text x="25" y="210" fill="#059669" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">पाई (π) का प्रयोग</text>
  </g>

  <!-- Box 3: गोला -->
  <g transform="translate(550, 40)" filter="url(#shadow)">
    <rect width="210" height="260" rx="10" fill="#ffffff" stroke="#CBD5E1" stroke-width="2"/>
    <rect x="15" y="15" width="180" height="40" rx="6" fill="url(#grad1)"/>
    <text x="105" y="40" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">गोला (Sphere)</text>
    <text x="25" y="90" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• त्रिज्या (r) पर आधारित</text>
    <text x="25" y="130" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• आयतन = 4/3 πr³</text>
    <text x="25" y="170" fill="#1E293B" font-family="system-ui, sans-serif" font-size="14">• पृष्ठीय क्षेत्रफल 4πr²</text>
    <text x="25" y="210" fill="#0D9488" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">सीधे मान रखना</text>
  </g>
</svg>
```

### Section 5 | UP Police परीक्षा रणनीति एवं अभ्यास प्रश्न

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में अक्सर ऐसे प्रश्न आते हैं जहाँ एक आकृति को पिघलाकर दूसरी आकृति बनाई जाती है। ऐसे प्रश्नों में दोनों आकृतियों के **आयतन को आपस में बराबर** रखा जाता है।

[quiz title="ठोस क्षेत्रमिति अभ्यास परीक्षा"]
Q: एक ठोस गोले की त्रिज्या 7 सेमी है। इसका आयतन कितना होगा? (π = 22/7 लें)

- A) 1437.33 घन सेमी (Correct: सही उत्तर 1437.33 घन सेमी है क्योंकि आयतन = 4/3 × (22/7) × 7³ = 1437.33)
- B) 1250.50 घन सेमी
- C) 1540.00 घन सेमी
- D) 1120.25 घन सेमी

Q: यदि किसी घन का संपूर्ण पृष्ठीय क्षेत्रफल 216 वर्ग सेमी है, तो उसका आयतन ज्ञात कीजिए।

- A) 64 घन सेमी
- B) 125 घन सेमी
- C) 216 घन सेमी (Correct: 6a² = 216 => a² = 36 => a = 6 सेमी, आयतन a³ = 6³ = 216 घन सेमी)
- D) 343 घन सेमी
[/quiz]