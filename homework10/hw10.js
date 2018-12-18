(function($) {
    document.addEventListener('DOMContentLoaded', function () {

        let sendButton = document.getElementById('send');
        let name = document.getElementById('name');
        let lat = document.getElementById('lat');
        let lon = document.getElementById('lon');
        let info = document.getElementById('info');

        sendButton.addEventListener('click', submitData, true);

        function submitData(e) {

            let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            let xhr = new XHR();

            if (name.value != '') {
                xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${name.value}&appid=be44d59c4371541119f81c0ebcd7356b&units=metric`, false);
            } else if (lat.value != '' && lon.value != '') {
                xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${lon.value}&appid=be44d59c4371541119f81c0ebcd7356b&units=metric`, false);
            } else {
                alert('Не все данные введены');
                return false;
            }

            xhr.onload = function () {
                if (this.status == 200) {
                    let weather = JSON.parse(this.responseText);
                    let infoText = `
                        Город: ${weather.name}<br/>
                        Температура: ${weather.main.temp}<br/>
                        Давление: ${weather.main.pressure}<br/>
                        Влажность: ${weather.main.humidity}<br/>
                        `;
                    info.innerHTML = infoText;
                } else {
                    alert('Город не найден');
                }
            }

            xhr.onerror = function () {
                alert('Ошибка ' + this.status);
            }

            xhr.send();

            e.preventDefault();
        }

        let sendEmail = document.getElementById('sendEmail');
        let email = document.getElementById('email');
        sendEmail.addEventListener('click', submitDataEmail, true);
        let infoemail = document.getElementById('infoemail');

        function submitDataEmail(e) {

            let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            let xhr = new XHR();

            if (email.value != '') {
                xhr.open('GET', `https://pozzad-email-validator.p.mashape.com/emailvalidator/validateEmail/${email.value}`, false);
            } else {
                alert('Не все данные введены');
                return false;
            }

            xhr.setRequestHeader("X-Mashape-Key", "99e4c4afbcmsh5470908f1cc0076p1dc657jsne7fb17cf0201")
            xhr.setRequestHeader("Accept", "application/json")

            xhr.onload = function () {
                if (this.status == 200) {
                    let responseData = JSON.parse(this.responseText);
                    if (responseData.isValid) {
                        infoemail.innerHTML = 'Данный email валидный';
                    } else {
                        infoemail.innerHTML = 'Данный email не валидный';
                    }

                } else {
                    alert('Ошибка');
                }
            }

            xhr.onerror = function () {
                alert('Ошибка ' + this.status);
            }

            xhr.send();

            e.preventDefault();
        }

        $('#sendnumber').on('click',function(){
            if ($('#number').val() == '') {
                $( "#infonumber" ).html( 'Вы не ввели данные' );
                return false;
            }
            let request = $.ajax({
                url: "https://numbersapi.p.mashape.com/" + $('#number').val() + "/math",
                method: "GET",
                headers: { "X-Mashape-Key" : "99e4c4afbcmsh5470908f1cc0076p1dc657jsne7fb17cf0201", "Accept": "application/json" }
            });


            request.done(function( msg ) {
                $( "#infonumber" ).html( msg );
            });

            request.fail(function( jqXHR, textStatus ) {
                alert( "Request failed: " + textStatus );
            });
            return false;
        });


    });
})(jQuery)
