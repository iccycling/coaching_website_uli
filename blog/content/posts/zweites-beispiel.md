---
title: "Beispiel Blog: So erstellst du einen Blogpost"
date: 2025-08-31
draft: false
featured_image: "/images/zweiter-post/bike1.jpg"
summary: "Ein Tutorial-Beitrag, wie man einen Blogpost erstellt, Bilder, Galerien, Zitate, Überschriften und Code einfügt."
---



Markdown ist ideal, um **Text strukturiert** zu schreiben.  
Du kannst einfache Formatierungen verwenden, wie **fett**, *kursiv* oder `Code` inline.

---

## Überschriften

Markdown unterstützt verschiedene Überschriften-Level:

```markdown
# H1 – größte Überschrift
## H2 – etwas kleiner
### H3 – noch kleiner
#### H4
##### H5
###### H6 – kleinste Überschrift
```


# H1 – größte Überschrift
## H2 – etwas kleiner
### H3 – noch kleiner
...


---

## Zitate einfügen

```markdown
> Dies ist ein Zitat.
> — Autor`
```
> Dies ist ein Zitat.
> — Autor
---

## Bilder einfügen

Ein einzelnes Bild mit Unterschrift:
```markdown
![Beschreibung des Bildes](/images/zweiter-post/bike1.jpg)  

<p style="margin-top:2px; text-align:center; font-style:italic;">
Dies ist die Bildunterschrift.
</p>
```
![Beschreibung des Bildes](/images/zweiter-post/bike1.jpg)  

<p style="margin-top:2px; text-align:center; font-style:italic;">
Dies ist die Bildunterschrift.
</p>

---

## Swiper Galerie (Lightbox/Slider)

Mehrere Bilder in einer **Swiper-Galerie**:

```markdown
{{</* gallery-swipe images="/images/zweiter-post/bike2.jpg,/images/zweiter-post/bike3.jpg,/images/zweiter-post/bike4.jpg" */>}}
```

{{< gallery-swipe images="/images/zweiter-post/bike2.jpg,/images/zweiter-post/bike3.jpg,/images/zweiter-post/bike4.jpg" >}}



---
## Hinweis zur Bildanzeige

Alle Bilder und Galerien sind automatisch mit einer **Lightbox** versehen – beim Anklicken öffnet sich das Bild groß im Overlay.  
Das funktioniert sowohl für einzelne Bilder als auch für Swiper- und Übersichtsgalerien.

---

## Textformatierung

```markdown
**fett**  
*kursiv*  
***fett + kursiv***  
`Code inline`
```

**fett**  
*kursiv*  
***fett + kursiv***  
`Code inline`

### Schriftarten, Farben und Größen (HTML in Markdown)

```markdown
<p style="color:blue; font-size:18px; font-family:Arial;">
Dies ist ein farbiger Text in einer anderen Schriftart.
</p>
```

<p style="color:blue; font-size:18px; font-family:Arial;">
Dies ist ein farbiger Text in einer anderen Schriftart.
</p>

---

## Codeblöcke

```markdown
    ```python
    strecke_km = 45
    zeit_h = 2.5

    durchschnitt = strecke_km / zeit_h
    print(f"Durchschnittsgeschwindigkeit: {durchschnitt:.1f} km/h")
    ```
```

```python
strecke_km = 45
zeit_h = 2.5

durchschnitt = strecke_km / zeit_h
print(f"Durchschnittsgeschwindigkeit: {durchschnitt:.1f} km/h")
```

---

## Zusammenfassung

Mit Markdown und Hugo kannst du:

- Überschriften, Absätze und Listen erstellen  
- Zitate einfügen  
- Bilder mit Unterschriften darstellen  
- Swiper- und Masonry-Galerien nutzen (Lightbox automatisch)  
- Codeblöcke darstellen  
- HTML für Schriftarten, Farben oder Größen einfügen

---

# Anleitung: Eigenen Blog mit Hugo und GitHub erstellen

Diese Anleitung zeigt dir Schritt für Schritt, wie du deinen Blog lokal bearbeitest und dann online stellst.  
Du brauchst dafür **GitHub** (zum Speichern im Internet) und **Hugo** (um die Website zu bauen).

---

## 1. Blog von GitHub herunterladen
1. Gehe auf die GitHub-Seite deines Blogs (z.B. `https://github.com/dein-nutzername/dein-blog`).
2. Klicke auf den grünen Button **Code** → **Download ZIP**.
3. Entpacke die ZIP-Datei an einem Ort auf deinem Computer, z.B. `Dokumente/blog`.

---

## 2. Hugo installieren
- **Windows**:
  1. Gehe auf [https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases).
  2. Lade die `.zip` Datei für Windows herunter (Extended-Version).
  3. Entpacke sie und lege die Datei `hugo.exe` in einen Ordner (z.B. `C:\hugo\`).
  4. Füge den Ordner zum **PATH** hinzu (falls das nicht klar ist: einfach die `hugo.exe` ins gleiche Verzeichnis legen wie dein Blog, dann funktioniert es auch).
- **Mac** (einfacher):
  ```bash
  brew install hugo
  ```

---

## 3. Blog lokal starten
1. Öffne ein Terminal (Windows: Eingabeaufforderung oder PowerShell, Mac: Terminal).
2. Wechsle in deinen Blog-Ordner:
   ```bash
   cd Dokumente/blog
   ```
3. Starte den Hugo-Server:
   ```bash
   hugo server -D
   ```
4. Öffne im Browser: [http://localhost:1313](http://localhost:1313)  
   → Dort siehst du sofort eine Live-Vorschau deines Blogs.

---

## 4. Bilder hinzufügen
- Lege deine Bilder in den Ordner:
  ```
  static/images/mein-post/
  ```
- So fügst du ein Bild in deinem Blog ein:
  ```markdown
  ![Beschreibung des Bildes](/images/mein-post/foto.jpg)
  ```

---

## 5. Einen neuen Blogpost erstellen
1. Im Ordner `content/posts/` eine neue Datei anlegen, z.B. `mein-post.md`.
2. Schreibe oben in die Datei:
   ```markdown
   ---
   title: "Mein erster Blogpost"
   date: 2025-08-31
   draft: false
   ---
   ```
3. Darunter deinen Text in **Markdown** schreiben:
   ```markdown
   ## Überschrift

   Das ist ein Absatz.

   > Ein schönes Zitat.

   ![Mein Bild](/images/mein-post/foto.jpg)
   ```

---

## 6. Vorschau ansehen
- Speichere die Datei.
- Gehe im Browser zurück auf [http://localhost:1313](http://localhost:1313).
- Dort siehst du sofort deinen Beitrag mit Bildern und Text.

---

## 7. Blog online stellen (manuell)

1. Wenn alles passt, musst du den Blog wieder auf GitHub hochladen.

   **Schritt A: Seite bauen**
   ```bash
   hugo -D
   ```
   → Hugo erstellt die fertige Website im Ordner `public/`.

   **Schritt B: Alles auf GitHub hochladen**
   - Öffne GitHub in deinem Browser und gehe zu deinem Repository (z.B. `dein-nutzername/dein-blog`).
   - Klicke auf **Add file** → **Upload files**.
   - Lade **den kompletten Ordner** hoch, also:
     - den `public/` Ordner (fertige Website für online)  
     - den `content/` Ordner (deine Blogposts als Markdown)  
     - den `static/` Ordner (deine Bilder)  
      

   So bleibt alles an einem Ort und du kannst später neue Beiträge hinzufügen, ohne dass alte verloren gehen.

2. Klicke auf **Commit changes**.

3. Fertig!  
   - Die fertige Seite wird online angezeigt unter  
     `https://dein-nutzername.github.io/`  
   - Deine Arbeitsdateien (Posts, Bilder) sind sicher auf GitHub gespeichert.

---

👉 **Kurz gesagt für Anfänger**:
- ZIP von GitHub runterladen  
- Hugo installieren  
- `hugo server -D` starten und Vorschau öffnen  
- Bilder in `static/images/...` speichern  
- Neue `.md` Datei in `content/posts/` erstellen und Text schreiben  
- Mit `hugo -D` bauen  
- Inhalt aus `public/` auf GitHub hochladen  

