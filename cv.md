# Fronte Finem

---

### Contacts

email: [fronte.finem+rsschool.cv@ya.ru](mailto:fronte.finem+rsschool.cv@ya.ru)

---

### About myself

My goal is to turn my hobby into real work skills. At different periods of my life, I have played with various programming languages mainly for automate or hack other's web or descktop apps. Now I want to become a creator and start my IT career as a web developer. 😤

---

### Skills

- *basic* HTML, CSS, JS
- *basic* Autohotkey, Powershell
- *basic* Python, Haskell, C#
- *basic* Git
- *basic* Gimp, Inkscape, Blender

---

### Education

Reading official or not docs (MDN, Microsoft, etc.).  
Habr, StackOverflow, GitHub, Wikipedia, Google, and so on... 😅

---

### English level:

A1 or A2 I guess.
Good comprehension when reading, listening or watching videos.
But weak in writing (google translate helps me 😔) and even more so in conversation.

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
