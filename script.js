const container = document.getElementById("characterContainer");

const addButton = document.getElementById("addCharacter");

const compareButton = document.getElementById("compareButton");

const resultArea = document.getElementById("resultArea");

const gapControl = document.getElementById("gapControl");


// 캐릭터 입력창 생성

function createCharacterInput(){

    const div = document.createElement("div");

    div.className = "characterInput";


    div.innerHTML = `

    <input type="text"
           placeholder="캐릭터 이름"
           class="name">


    <input type="number"
           placeholder="키(cm)"
           class="height">


    <input type="file"
           accept="image/*"
           class="image">


    <button class="deleteButton">
        삭제
    </button>

    `;


    const deleteButton =
        div.querySelector(".deleteButton");


    deleteButton.addEventListener(
        "click",
        function(){

            div.remove();

        }
    );


    container.appendChild(div);

}



// 캐릭터 추가 버튼

addButton.addEventListener(
    "click",
    createCharacterInput
);



// 기본 캐릭터 2개 생성

createCharacterInput();

createCharacterInput();




// 비교 버튼

compareButton.addEventListener(
    "click",
    function(){


        resultArea.innerHTML = "";


        const inputs =
            document.querySelectorAll(".characterInput");


        let characters = [];



        inputs.forEach(function(input){


            const name =
                input.querySelector(".name").value;


            const height =
                Number(
                    input.querySelector(".height").value
                );


            const image =
                input.querySelector(".image").files[0];



            if(name && height && image){


                characters.push({

                    name:name,

                    height:height,

                    image:image

                });


            }


        });



        if(characters.length === 0){

            alert("캐릭터 정보를 입력해주세요.");

            return;

        }



        characters.forEach(function(character){


            const wrapper =
                document.createElement("div");


            wrapper.className =
                "characterDisplay";



            const imageBox =
                document.createElement("div");


            imageBox.className =
                "imageBox";



            const img =
                document.createElement("img");



            img.src =
                URL.createObjectURL(
                    character.image
                );



            // 모바일 화면에서는 전체 크기 축소
            // 키 비율은 유지

            let mobileScale =
                window.innerWidth <= 600 ? 0.7 : 1;



            img.style.height =
                (character.height / 200 * 700 * mobileScale)
                + "px";



            const info =
                document.createElement("div");


            info.className =
                "characterInfo";


            info.innerHTML =
                character.name
                +
                "<br>"
                +
                character.height
                +
                "cm";



            imageBox.appendChild(img);


            wrapper.appendChild(imageBox);


            wrapper.appendChild(info);


            resultArea.appendChild(wrapper);


        });


    }
);




// 캐릭터 간격 조절

if(gapControl){

    gapControl.addEventListener(
        "input",
        function(){

            const displays =
            document.querySelectorAll(".characterDisplay");


            displays.forEach(function(display, index){

                if(index !== 0){

                    display.style.marginLeft =
                    this.value + "px";

                }

            }, this);

        }
    );

}
