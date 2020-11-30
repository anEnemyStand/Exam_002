
function fetchData() {

    return fetch('https://data.cityofnewyork.us/resource/avir-tzek.json')
        .then(response => response.json())
        .then(json => renderDatas(json))

}


function renderDatas(json) {
    const h3 = document.querySelector('h3')
    json.forEach(data => {

        const p = document.createElement('p') // not inserting the element to browser yet
        // bringing an element to existence
        if (data.demographic == 'Borough Total') {
          p.innerHTML =
          `<div>${data.borough} ${data.cohort}</div>
          <p>Total Students: ${data.total_cohort}
          <p>Total Graduates: ${data.total_grads_n}
          <p>Graduation Percentage: ${data.total_grads_of_cohort}% <br><br>`
          h3.appendChild(p)
        }

    })
}


document.addEventListener('DOMContentLoaded', function () {
    fetchData()
})
