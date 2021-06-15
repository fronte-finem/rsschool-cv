# Fronte Finem

---

### Contacts

- email: [fronte.finem+rsschool.cv@ya.ru](mailto:fronte.finem+rsschool.cv@ya.ru)
- github: [fronte-finem](https://github.com/fronte-finem/)

---

### About me

My goal is to turn my hobby into real work skills. At different periods of my life, I have played with various programming languages mainly for automate or hack other's web or descktop apps. Now I want to become a creator 😤 and start my IT career as a web developer.

---

### Skills (hobby level)

- HTML, CSS, JS
- Autohotkey, Powershell
- Python, Haskell, C#
- Git
- Gimp, Inkscape, Blender

---

### Education

Mostly RTFM 😅 learning style: official or not docs (MDN, Microsoft, etc.), Habr, StackOverflow, GitHub, Wikipedia, Google, and so on...

---

### English level (A1/A2):

- 📖 Reading: 4/5
- 📝 Writing: 2/5
- 👂 Listening: 3/5
- 🙊 Speaking: 1/5

---

### Code examples

-
  ```js
  // Javascript example

  function fizzbuzz(n) {
    return [...genFizzBuzz(n)];
  }

  function* genFizzBuzz(n) {
    for (let i=1; i<=n; i++) {
      let x = "";
      if (i % 3 == 0) x += "Fizz";
      if (i % 5 == 0) x += "Buzz";
      yield x === "" ? i : x;
    }
  }
  ```

-
  ```powershell
  # Powershell example

  function Get-YoutubePlaylistLinks ([uri]$ytPlaylistUrl) {
      Write-Host "Scraping playlist: " -ForegroundColor DarkBlue -NoNewline
      Write-Host "$ytPlaylistUrl" -ForegroundColor DarkCyan
      $response = Invoke-WebRequest -UseBasicParsing -Uri $ytPlaylistUrl
      $baseUrl = "$($ytPlaylistUrl.Scheme)://$($ytPlaylistUrl.Host)"
      $fragments = $response.Content -split '<'

      $links = $fragments | Select-String -Pattern 'video-title-link'
      $links = $links | ForEach-Object {$_ -replace '.*href="([^&]+).*', '$1'}

      function extractData ([string]$link) {
          $data = $link.Trim() -split "`n"
          [PSCustomObject]@{
              link = [uri]"$baseUrl$($data[0])"
              title = $data[1].Trim()
          }
      }

      $links | ForEach-Object {extractData $_}
  }
  ```

-
  ```haskell
  -- Haskell example

  module MyShow ( formatPath, showLeafs ) where

  import Data.List ( intercalate )
  import Types ( Section, sectionLeafsPaths, getTitle, formatId )

  showLeafs :: Section -> String
  showLeafs = unlines . map formatPath . sectionLeafsPaths

  formatPath :: [Section] -> String
  formatPath =  (++) <$> formatIds <*> (":  "++) . formatTitles where
      formatIds    = intercalate "." . map formatId
      formatTitles = intercalate " / " . map getTitle
  ```
