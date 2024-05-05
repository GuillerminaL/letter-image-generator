
# Letter image generator  <img src="doc/code-example.png" width="60" style="border-radius:100%" align="center">


Simple letter image generator. 

## 📖 Description

It uses a canvas to generate an image binary, 
according to the following characteristics:

- Random colors in images and letters
- *Required entries*: 
  - One or multiple letters, case sensitive <img src="doc/100px_default_font.png" width="40" align="center">
  - Size (px)
- Font customization:
  - Font styles: 
    - normal (*default*), 
    - italic <img src="doc/fonts/style/italic.png" width="40" align="center">
    - oblique
  - Font variant: 
    - normal (*default*)
    - small-caps <img src="doc/fonts/variant/small-caps.png" width="40" align="center">
  - Font weight: 
    - normal (*default*)
    - bold <img src="doc/fonts/weight/bold.png" width="40" align="center">
    - bolder
    - lighter 
    - 100, 200, 300, 400, 500, 600, 700, 800, 900
  - Font family: 
    - Arial (*default*) <img src="doc/fonts/family/Arial.png" width="40" align="center">
    - Courier New <img src="doc/fonts/family/Courier New.png" width="40" align="center">
    - Cursive <img src="doc/fonts/family/Cursive.png" width="40" align="center">
    - Fantasy <img src="doc/fonts/family/Fantasy.png" width="40" align="center">
    - Garamond <img src="doc/fonts/family/Garamond.png" width="40" align="center">
    - Georgia <img src="doc/fonts/family/Georgia.png" width="40" align="center">
    - sans-serif <img src="doc/fonts/family/sans-serif.png" width="40" align="center">
    - Tahoma <img src="doc/fonts/family/Tahoma.png" width="40" align="center">
    - Times New Roman <img src="doc/fonts/family/Times New Roman.png" width="40" align="center">
    - Trebuchet MS <img src="doc/fonts/family/Trebuchet MS.png" width="40" align="center">
    - Verdana <img src="doc/fonts/family/Verdana.png" width="40" align="center">

## 📦 Installation

To install the package, just execute the following command:

`$ npm install letter-image-generator`

## 🕹️ Usage 
### Import
```
    import generateLetterImage from "letter-image-generator";
```

### Create image

Default

```
    //Creates an image with the specified letter/s and size in px, default font style, variant, weight and font values
    const img = generateLetterImage('L', 100);
```

Custom
```
    //Creates an image with the specified letter/s and size in px, custom font style, variant, weight and font values
    const img = generateLetterImage('Lig', 100, 'italic', 'small-caps', 'bold', 'Georgia');
```

### Usage Example 

```
    <html>
    
        <body>
          <img id="example" style="border-radius:50%"  />
        </body>
        
        <script type="module">     
        
            //1. Import      
            import generateLetterImage from "letter-image-generator";
            
            //2. Generate
            // default: const img = generateLetterImage('L', 100);
            // custom:
            const img = generateLetterImage('Lig', 100, 'italic', 'normal', 'lighter', 'sans-serif');
            
            //3. Use
            document.querySelector('#example').src = img;
            
        </script>
        
    </html>
    
```

Code output:   <img src="doc/code-example.png" width="100" align="center">
