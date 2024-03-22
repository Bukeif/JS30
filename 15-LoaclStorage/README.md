








```javascript
function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: 'Item Name',
        done: false
    }
}
addItems.addEventListener('submit', addItem);
```
- `this.querySelector('[name=item]')` 這邊 `this` 指 `add-items` 底下有 `[name=item]`

- this.reset() 可以重置表單內元件回到初始狀態 [reset](https://www.w3schools.com/jsref/met_form_reset.asp)