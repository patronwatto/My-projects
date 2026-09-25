let myLeads = [];
let leads = [];

const btn = document.getElementById("input-btn");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-El");
 

btn.addEventListener('click', getLead);
delBtn.addEventListener('dblclick', deleteAll);
tabBtn.addEventListener('click', saveTab);

inputEl.addEventListener('keypress', (e) => {
    if(e.key === Enter) getLead();
});

function saveTab(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // let activeTab = tabs[0];
        // let activeTabId = tabs[0].id;

        leads.push(tabs[0].url);
        ulEl.innerHTML += tabs[0].url;
        localStorage.setItem("MyLeads", JSON.stringify(leads));
    });

   
};

// saveTab();

function deleteAll() {
    localStorage.clear();
    myLeads = [];
    leads = [];
    ulEl.innerHTML = "";
};

function getLead(){
    let entry = inputEl.value.trim();
    // myLeads.push(entry);
    // ulEl.textContent = "";

    // We can use concatenated strings to output the list items as ancor tags or.....
    // let listItem = "<li class='li'><a href='" + entry +"'  target='_blanc'>" + entry +"</a></li>";

    // We could also use the Template string which is the best method to output the list items as ancr tags
    // In the Template string method, the concatenated statements are replaced by a variable in curly braces prefixed with a $ symbol

    let listItem = `<li>
                        <a href="${entry}" target="_blanc" > ${entry} </a>
                    </li>
                    `
    // Solutions #1 and #2 uses the for loop
    // for(i = 0; i < myLeads.length; i++){
        // Solution #1
        // const li = document.createElement("li");
        // li.classList.add("lead");
        // li.textContent = myLeads[i];
        // ulEl.appendChild(li); 

        // Solution #2
        // listItems += "<li class='li'>" + " "+myLeads[i] +"</li>";
    // }
    inputEl.value = "";
    ulEl.innerHTML += listItem;
    myLeads.push(entry);
    localStorage.setItem("MyLeads", JSON.stringify(myLeads));

    // console.log(Boolean(off));
};

// const allLeads = JSON.parse(localStorage.getItem("MyLeads"));
Leads = JSON.parse(localStorage.getItem("MyLeads"));
useLeads(Leads);

function useLeads(array){
    let listItems = "";
    if(array){
    for(i=0; i<array.length; i++){
        // listItems += "<li><a href='" + array[i] + "'  target='_blanc' >" + array[i] + "</a></li>";
        listItems += `<li>
                          <a href="${array[i]}  target="_blanc" > 
                            ${array[i]} 
                          </a>
                      </li> `;
                      
    }

    inputEl.value = "";
    ulEl.innerHTML = listItems;
}};