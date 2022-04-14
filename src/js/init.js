import {Cards} from '../pages/cards/Cards';
import {FormElements} from '../pages/form-elements/FormElements';
import {HeaderFooter} from '../pages/header-footer/HeaderFooter';
import {Landing} from '../pages/landing/Landing';
import {RegistrationPage} from '../pages/registration-page/RegistrationPage';
import {SignIn} from '../pages/sign-in/SignIn';
import {RoomDetails} from '../pages/room-details/RoomDetails';
import {SearchRoom} from '../pages/search-room/SearchRoom';

$(() => {
    $('.js-cards').each((_, element) => new Cards(element));
    $('.js-form-elements').each((_, element) => new FormElements(element));
    $('.js-header-footer').each((_, element) => new HeaderFooter(element));
    $('.js-landing').each((_, element) => new Landing(element));
    $('.js-registration-page').each((_, element) => new RegistrationPage(element));
    $('.js-sign-in').each((_, element) => new SignIn(element));
    $('.js-room-details').each((_, element) => new RoomDetails(element));
    $('.js-search-room').each((_, element) => new SearchRoom(element));
});
