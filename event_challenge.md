# Event Challenge

- Research and discover a new HTML event.
- Utilize this new HTML event and successfully execute it in the browser.

HELPFUL LINK:

    [JavaScript Events](https://www.w3schools.com/js/js_events.asp)

```js
    
    let e = document.getElementById("myDIV");
    
    function test() {
        let newColor = getRandomColor();
        e.style.backgroundColor = newColor;
    }
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    e.addEventListener("dblclick", test());
    
```
