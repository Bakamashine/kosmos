import React from "react";
import Layout from "./Layout";
import { Head } from "@inertiajs/react";
import { ListGroup } from "react-bootstrap";
export default function AboutUs() {
    const title = "О нас";
    return (
        <Layout title={title} title_h1>
            <div className="about_us">
                <p>
                    Добро пожаловать на сайт Недалёкий космос — ваш гид в
                    удивительный мир ближайшего космоса!
                </p>
                <p>
                    Мы — команда энтузиастов, увлечённых астрономией, наукой и
                    технологиями, которые делают космос ближе к каждому. Наш
                    сайт создан для тех, кто хочет полететь на другую планету и
                    узнать о космических явлениях без сложных формул и
                    академического жаргона.
                </p>
                <h4>Наша миссия</h4>
                <p>
                    Мы стремимся сделать космос доступным и понятным. В эпоху,
                    когда космические полёты становятся реальностью, мы помогаем
                    людям открыть для себя "недалёкий космос" — от Солнечной
                    системы до ближайших звёзд. Наша цель: вдохновлять
                    любопытство, делиться знаниями и объединять сообщество
                    любителей астрономии.
                </p>
                <h4>История проекта</h4>
                <p>
                    Идея сайта родилась в 2020 году, когда группа
                    друзей-астрономов решила поделиться своими наблюдениями за
                    небом. Сначала это был скромный блог с фотографиями Луны и
                    планет, но со временем мы выросли в полноценный ресурс.
                    Сегодня "Недалёкий космос" — это возможность полететь на
                    любую планету и получить новые знания.
                </p>
                <p>Кто знает, может вы переедите туда жить.</p>
                <h4>Наша команда</h4>
                <ul>
                    <li>
                        <strong>Алексей Иванов</strong> — основатель и главный
                        редактор. Профессиональный астроном с опытом работы в
                        обсерваториях.
                    </li>
                    <li>
                        <strong>Мария Петрова</strong> — журналист и
                        популяризатор науки. Пишет статьи, которые объясняют
                        сложное просто.
                    </li>
                    <li>
                        <strong>Дмитрий Сидоров</strong> — разработчик. Создаёт
                        интерактивные инструменты и приложения для наблюдений.
                    </li>
                    <li>
                        <strong>Анна Кузнецова</strong> — иллюстратор и
                        дизайнер. Рисует звёздные карты и визуализации. Мы — не
                        корпорация, а сообщество единомышленников.
                    </li>
                </ul>
                <p>
                    Если вы хотите присоединиться, пишите нам! Свяжитесь с нами
                    У вас есть идеи, вопросы или материалы для публикации?
                    Напишите на email: ivan.fa.002@gmail.com или присоединяйтесь
                    к нашему форуму. Следите за обновлениями в соцсетях: VK,
                    Telegram. Вместе исследуем космос — шаг за шагом!
                </p>
                <p>♿ ♿ ♿</p>
                <h3>Наши спонсоры: </h3>
                <ListGroup>
                    <ListGroup.Item><a href="http://vikapaf2.beget.tech">http://vikapaf2.beget.tech</a></ListGroup.Item>
                    <ListGroup.Item><a href="http://daniis06.beget.tech">http://daniis06.beget.tech</a></ListGroup.Item>
                    <ListGroup.Item><a href="http://itaci6je.beget.tech">http://itaci6je.beget.tech</a></ListGroup.Item>
                    <ListGroup.Item><a href="http://chiefyb9.beget.tech">http://chiefyb9.beget.tech</a></ListGroup.Item>
                    <ListGroup.Item><a href="http://cherneo8.beget.tech">http://cherneo8.beget.tech</a></ListGroup.Item>
                    <ListGroup.Item><a href="http://masukod7.beget.tech">http://masukod7.beget.tech</a></ListGroup.Item>
                    <ListGroup.Item><a href="http://aaaabbrp.beget.tech">http://aaaabbrp.beget.tech</a></ListGroup.Item>
                    <ListGroup.Item><a href="
                        http://qwerty1wew.beget.tech">http://qwerty1wew.beget.tech</a>
                    </ListGroup.Item>
                    <ListGroup.Item><a href="http://nikitlht.beget.tech">http://nikitlht.beget.tech</a></ListGroup.Item>
                <ListGroup.Item><a href="http://masukod7.beget.tech">http://masukod7.beget.tech</a></ListGroup.Item>
                </ListGroup>

            </div>
        </Layout>
    );
}
