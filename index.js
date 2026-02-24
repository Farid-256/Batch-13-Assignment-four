let interviewList = []
let rejectedList = []

let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')

const allCardSection = document.getElementById('allCards')
const filteredSection = document.getElementById('filtered-section')
const mainContainer = document.querySelector('main')
let availableCount = document.getElementById('availableCount')

let currentTab = "all"

function calculateCount() {
    const totalCards = allCardSection.querySelectorAll('.card').length

    total.innerText = totalCards
    availableCount.innerText = totalCards
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()


function toggleStyle(clickedBtn) {

    const buttons = document.querySelectorAll('.filter-btn')

    buttons.forEach(btn => {
        btn.classList.remove('bg-black', 'text-white')
        btn.classList.add('bg-gray-300', 'text-black')
    })

    clickedBtn.classList.remove('bg-gray-300', 'text-black')
    clickedBtn.classList.add('bg-black', 'text-white')

    const text = clickedBtn.innerText.trim().toLowerCase()

    currentTab = text

    if (currentTab === "all") {
        allCardSection.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    } else {
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderFiltered()
    }
}


mainContainer.addEventListener('click', function (event) {

    // Interview Click
    if (event.target.classList.contains('interview-btn')) {
        const card = event.target.closest('.card')
        const jobName = card.querySelector('.jobsName').innerText

        // Remove from rejected if exists
        rejectedList = rejectedList.filter(job => job !== jobName)

        if (!interviewList.includes(jobName)) {
            interviewList.push(jobName)
            card.querySelector('.status').innerText = 'Interview'
        } else {
            interviewList = interviewList.filter(job => job !== jobName)
            card.querySelector('.status').innerText = 'Not Applied'
        }

        renderFiltered()
        calculateCount()
    }


    if (event.target.classList.contains('rejected-btn')) {
        const card = event.target.closest('.card')
        const jobName = card.querySelector('.jobsName').innerText

        interviewList = interviewList.filter(job => job !== jobName)

        if (!rejectedList.includes(jobName)) {
            rejectedList.push(jobName)
            card.querySelector('.status').innerText = 'Rejected'
        } else {
            rejectedList = rejectedList.filter(job => job !== jobName)
            card.querySelector('.status').innerText = 'Not Applied'
        }

        renderFiltered()
        calculateCount()
    }


    if (event.target.classList.contains('fa-trash-can')) {
        const card = event.target.closest('.card')
        const jobName = card.querySelector('.jobsName').innerText

        interviewList = interviewList.filter(job => job !== jobName)
        rejectedList = rejectedList.filter(job => job !== jobName)

        card.remove()

        renderFiltered()
        calculateCount()
    }
})


function renderFiltered() {

    filteredSection.innerHTML = ''

    let list = []

    if (currentTab === "interview") list = interviewList
    if (currentTab === "rejected") list = rejectedList

    if (list.length === 0) {
        filteredSection.innerHTML = `
        <div class="text-center py-10 w-full">
            <i class="fa-solid fa-briefcase text-5xl text-gray-400"></i>
            <h3 class="text-xl mt-4">No Jobs Available</h3>
            <p class="text-gray-500">Please check another tab</p>
        </div>
        `
        return
    }

    list.forEach(jobName => {

        const originalCard = [...allCardSection.querySelectorAll('.card')]
            .find(card => card.querySelector('.jobsName').innerText === jobName)

        if (originalCard) {
            const clone = originalCard.cloneNode(true)
            filteredSection.appendChild(clone)
        }
    })
}