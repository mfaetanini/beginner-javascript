const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event){
    console.log(event.currentTarget);
    //hide all tab panels
    tabPanels.forEach (panel => {
        panel.hidden = true;
    });
    //mark all tabbutton as unselected
    tabButtons.forEach(tab =>{
        tab.setAttribute('aria-selected', false);
    });
    //mark the clicked tab as selected

    event.currentTarget.setAttribute('aria-selected', true);
    //find the associated tabPabel and show it!
    /* METHOD 1
    const {id}  = event.currentTarget;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
    */

    //METHOD 2 - find in the array of tab panels
    tabPanels.find();


}

tabButtons.forEach(button=> button.addEventListener('click', handleTabClick));