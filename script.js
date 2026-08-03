const container = document.getElementById("characterContainer");

const addButton = document.getElementById("addCharacter");

const compareButton = document.getElementById("compareButton");

const resultArea = document.getElementById("resultArea");


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



// 캐릭터 추가

addButton.addEventListener(
    "click",
    createCharacterInput
);



// 시작 캐릭터 2명

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



            // 200cm 기준 700px

            img.style.height =
                (character.height / 200 * 700)
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