# Type Ahead  個人筆記紀錄用

### 工具
- fetch
    - then()
    - json()
- Array
    - filter()
    - push()
    - map()
    - join()
    - (...data)
- RegExp
    - match()
    - replace()

### 流程
1. 透過 `fetch` 抓取資料轉成 `JSON` ，展開運算子存至陣列中。
- 
```javascript
let  cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
```
2. 定義一個function`findMatches` ， 過濾資料
    - `filter()` 篩選符合的資料保留下來
    - `RegExp` 正規表達式，g代表全域，i代表不分大小寫
    - `match`  看起來是匹配器來著，進行匹配，如果沒有匹配，則返回null
```javascript
function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //here we need to figure out if the city on state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}
```
```javascript
            function displayMatches(){
                const matchArray = findMatches(this.value, cities);
                console.log(matchArray);
                const html = matchArray.map(place => {
                const regex = new RegExp(this.value, 'gi');
                const cityName = place.city.replace(regex, `<span class="h1">${this.
                    value}</span>`);
                const stateName = place.state.replace(regex, `<span class="h1">${this.
                    value}</span>`);
                    return `
                    <li>
                        <span class="name">${cityName}, ${stateName}</span>
                        <span class="population">${numberWithCommas(place.population)}</span>
                    </li>
                    `;
                }).join('');
                suggestions.innerHTML = html;
                
            }
```
```javascript
            // searchInput.addEventListener('change', displayMatches);
            // searchInput.addEventListener('keyup', displayMatches);
            searchInput.addEventListener('input', displayMatches);
```

