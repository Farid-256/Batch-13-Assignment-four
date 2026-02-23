
let interviewList = []
let rejectedList = []

let total = document.getElementById('total')
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount')

const allFilterBtn = document.getElementById('all-filter-btn')
const interViewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards')
const mainContainer = document.querySelector('main')
const filteredSection = document.getElementById('filtered-section')


function calculetCount() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}
calculetCount()


function toggleStyle(clickedBtn) {

    const buttons = document.querySelectorAll('.filter-btn')

    buttons.forEach(btn => {
        btn.classList.remove('bg-black', 'text-white')
        btn.classList.add('bg-gray-300', 'text-black')
    })

    clickedBtn.classList.remove('bg-gray-300', 'text-black')
    clickedBtn.classList.add('bg-black', 'text-white')
}

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode
        const jobName = parentNode.querySelector('.jobsName').innerText
        const tecnoName = parentNode.querySelector('.tecnoName').innerText

        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        const cardInfo = {
            jobName,
            tecnoName,
            salary,
            status,
            notes
        }

        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName)
        parentNode.querySelector('.status').innerText = 'interview'

        if (!jobExist) {
            interviewList.push(cardInfo)
        }
        randerInterview()
    }

})

function randerInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewList) {
        let div = document.createElement('div')
        div.className = 'card flex flex-col gap-5 pb-10'
        div.innerHTML = `
         <div class="space-y-6">
                    <div>
                        <h2 class="jobsName text-3xl">Mobile First Corp</h2>
                        <h5 class="tecnoName text-gray-400">React Native Developer</h5>
                    </div>

                    <div>
                        <h4 class="salary text-gray-400">Remote •Full-time •$130,000 - $175,000</h4>
                    </div>

                    <div>
                        <span class="status bg-gray-300 px-5 py-2 rounded-sm">Not Applied</span>
                        <p class="notes py-2">Build cross-platform mobile applications using React Native. Work on
                            products
                            used by millions of users worldwide.</p>
                    </div>

                    <div class="flex gap-10">
                        <button
                            class="interview-btn border border-green-500 px-5 py-2 rounded-md text-green-500 cursor-pointer">interview</button>

                        <button
                            class="rejected-btn border border-red-500 px-5 py-2 rounded-md text-red-500 cursor-pointer">Rejected</button>
                    </div>
                </div>
                <!-- main part two -->
                <div>
                    <i class="fa-solid fa-trash-can cursor-pointer"></i>
                </div>
        `
    }
}