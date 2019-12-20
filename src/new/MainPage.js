import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-8 col-sm-8 col-md-8">
              <h2> Инструкция </h2>
              <hr />
              <h4>1. Создать профиль в Sing in </h4>
              <h4>2. Проверить данные профиля в Profile </h4>
              <h4>3. Удалить данные кнопкой delete account </h4>
              <img
                src="https://i.pinimg.com/originals/28/43/97/284397e1110c44bee7dcbd0460a38421.jpg"
                width="500px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
