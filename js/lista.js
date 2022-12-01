class ToDoList {
    constructor() {
        // form registration
        this.name = document.querySelector('#name');
        this.type = document.querySelector('#type');
        this.description = document.querySelector('#description');
        this.date = document.querySelector('#date');

        // form edit
        this.newName = document.querySelector('#newName');
        this.newType = document.querySelector('#newType');
        this.newDescription = document.querySelector('#newDescription');
        this.newDate = document.querySelector('#newDate');

        let id = localStorage.getItem('Tarefa');
        if(id === null) {
            localStorage.setItem('Tarefa', 0);
        }

        this.infos = [];

        this.getValues();
        this.showList();
        this.updateValues();
    }

    getNextId() {
        this.nextId = localStorage.getItem('Tarefa');
        return parseInt(this.nextId) + 1;
    }

    saveValues(info) {
        this.id = this.getNextId();

        localStorage.setItem(this.id, JSON.stringify(info));

        localStorage.setItem('Tarefa', this.id);
    }

    updateValues() {
        let values = localStorage.getItem('Tarefa');
        this.allValues = JSON.parse(localStorage.getItem(values));
        console.log(this.allValues);
    }

    showModal() {
        document.querySelector('#modal').classList.add('bg-danger');
        document.querySelector('#modal').classList.toggle('hide');
        document.querySelector('.modal-header h2').innerHTML = 'Algo deu errado!';

        document.querySelector('.modal-body p').innerHTML = 'Verifique os campos e tente novamente.';

        document.querySelector('#fade').classList.toggle('hide');
        document.querySelector('.btn-outline-dark').addEventListener('click', () => {
            document.querySelector('#modal').classList.add('hide');
            document.querySelector('#fade').classList.add('hide');
        });
    }

    parseType() {
        let t = localStorage.getItem('Tarefa');
        let type = JSON.parse(localStorage.getItem(t));

        switch(type[1]) {
            case '1':
                return type[1] = 'Alimentação';
            break;

            case '2':
                return type[1] = 'Saúde';
            break;

            case '3':
                return type[1] = 'Trabalho';
            break;

            case '4':
                return type[1] = 'Pessoal';
            break;
        }
    }

    btnRemove() {
        this.remove = document.querySelector('.btn-danger');
        this.remove.addEventListener('click', () => {
            localStorage.removeItem('Tarefa');
            window.location.reload();
        });
    }

    btnEdit() {
        let informations = localStorage.getItem('Tarefa');
        this.allInformations = JSON.parse(localStorage.getItem(informations));

        this.edit = document.querySelector('.btn-edit');
        this.edit.addEventListener('click', () => {
            document.querySelector('#formRegistration').style.display = 'none';
            document.querySelector('#formEdit').style.display = 'block';
            window.location.href = '#home';
            
            this.newName.value = this.allInformations[0];
            this.newType.value = this.allInformations[1];
            this.newDescription.value = this.allInformations[2];
            this.newDate.value = this.allInformations[3];

            document.querySelector('.btn-warning').addEventListener('click', () => {
                this.infos.push(this.newName.value, this.newType.value, this.newDescription.value, this.newDate.value);                
                // this.updateValues(this.infos);
                window.location.reload();
            });
        });
    }

    getValues() {
        this.btn = document.querySelector('.btn-success');

        this.btn.addEventListener('click', event => {
            if (this.name.value == '' || this.type.value == '' || this.description.value == '' || this.date.value == '') {
                this.showModal();
            } else {
                this.infos.push(this.name.value, this.type.value, this.description.value, this.date.value);
                this.saveValues(this.infos);
                window.location.reload();
            }
        });
    }

    showList() {
        let info = localStorage.getItem('Tarefa');
        let allInfo = JSON.parse(localStorage.getItem(info));

        document.querySelector('#myList').innerHTML = `
            <tr>
                <th scope="row">${info}</th>
                <td>${allInfo[0]}</td>
                <td>${this.parseType()}</td>
                <td>${allInfo[2]}</td>
                <td>${allInfo[3]}</td>
                <td>
                    <button type="button" class="btn btn-warning btn-edit">Editar</button>
                    <button type="button" class="btn btn-danger">Excluir</button>
                </td>
            </tr>
        `;

        this.btnEdit();
        this.btnRemove();
    }
}

let toDoList = new ToDoList();