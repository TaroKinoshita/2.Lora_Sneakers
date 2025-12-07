// 33枚の画像データ（各問題ごとに3枚 × 12問 = 36枚）
const questions = [
    // Question 1
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/VvyyX6c.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/Z2tO1ca.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/xVGAxw4.png' }
    ],
    // Question 2
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/mKIsiWA.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/sGA6ulS.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/JjFcrUn.png' }
    ],
    // Question 3
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/Dxd2A8w.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/dBFOlQR.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/G40QflA.png' }
    ],
    // Question 4
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/tfOhDr6.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/0OxKmgY.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/UMPZpyy.png' }
    ],
    // Question 5
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/co0sZta.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/WvJ8rLV.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/RQ2E1z5.png' }
    ],
    // Question 6
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/gKYPh0N.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/XtRQthU.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/Fs14W8d.png' }
    ],
    // Question 7
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/T6Tll8n.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/8TS4P9B.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/yL7uhwt.png' }
    ],
    // Question 8
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/0qB2UY7.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/nDe5zzf.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/WtIWWYf.png' }
    ],
    // Question 9
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/KZRdC5D.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/SFMIZxE.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/jVBpwKe.png' }
    ],
    // Question 10
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/Vf1zvL9.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/6NyPC11.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/xdRSrYC.png' }
    ],
    // Question 11
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/PydKkqa.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/cZ4Elc6.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/HFXjG7N.png' }
    ],
    // Question 12
    [
        { id: 'A', name: 'Dataset A', url: 'https://i.imgur.com/do3crzw.png' },
        { id: 'B', name: 'Dataset B', url: 'https://i.imgur.com/DZrIIKB.png' },
        { id: 'C', name: 'Dataset C', url: 'https://i.imgur.com/9u3jpAn.png' }
    ]
];

// 配列をシャッフル
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('questionsContainer');
    
    questions.forEach((questionImages, index) => {
        const questionNum = index + 1;
        const shuffledImages = shuffle(questionImages);
        
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        
        questionBlock.innerHTML = `
            <h2 class="question-number">Question ${questionNum}/12</h2>
            <div class="images-container"></div>
        `;
        
        const imagesContainer = questionBlock.querySelector('.images-container');
        
        shuffledImages.forEach(img => {
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card';
            
            imageCard.innerHTML = `
                <img src="${img.url}" alt="${img.name}">
                <div class="rating-container">
                    <label>CG Level: <span class="rating-value">2</span></label>
                    <div class="slider-labels">
                        <span>1<br>Real</span>
                        <input type="range" name="q${questionNum}-${img.id}" min="1" max="3" value="2" class="slider" data-id="${img.id}">
                        <span>3<br>CG</span>
                    </div>
                </div>
            `;
            
            imagesContainer.appendChild(imageCard);
        });
        
        container.appendChild(questionBlock);
    });
    
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        slider.addEventListener('input', (e) => {
            const card = e.target.closest('.image-card');
            const valueSpan = card.querySelector('.rating-value');
            valueSpan.textContent = e.target.value;
        });
    });
    
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(form)).toString()
        })
        .then(() => {
            document.querySelector('.container form').style.display = 'none';
            document.getElementById('thankYou').style.display = 'block';
            window.scrollTo(0, 0);
        })
        .catch((error) => alert('Submission error'));
    });
});