function checkInfo(firstName, lastName, email, phone, birthday){
    if(firstName.length < 2){
        alert('First name must be longer!');
        return;
    }
    if(lastName.length < 2){
        alert('Last name must be longer!');
        return;
    }

    const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regEmail.test(email)) {
        alert('Email format is wrong!');
        return;
    }
    const regNumber = /^\+?3?8?(0[\s\.]\(\d{2}\)[\s\.]\d{3}[\.-]\d{2}[\.-]\d{2})$/;
    // +380 (XX) XXX-XX-XX
    if (!regNumber.test(phone)) {
        alert('Phone format is wrong!');
        return;
    }
    const regBday = /^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/;
    // +380 XX XXX XX XX or +380-XX-XXX-XX-XX
    if (!regBday.test(birthday)) {
        alert('Birthday format is wrong!');
        return;
    }

    return true;
}