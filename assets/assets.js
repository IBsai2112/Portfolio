import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import angular from './angular.png';
import js from './js.png';
import unity from './unity.png';
import mongodb from './mongodb.png';
import expressJs from './expressJsLogo.png';
import framerMotion from './framerMotionLogo.png';
import nextJs from './nextJsLogo.png';
import gsap from './gsapLogo.png';
import sql from './mySqlLogo.png';
import aws from './awsLogo.png';
import npm from './npmLogo.png';
import tailwind from './tailwindCSSLogo.png';
import java from './javaLogo.png';
import python from './pythonLogo.png';

import right_arrow_white from './right-arrow-white.png';
import git_logo from './gitLogo.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    sql,
    angular,
    js,
    python,
    java,
    tailwind,
    npm,
    aws,
    expressJs,
    framerMotion,
    gsap,
    nextJs,
    unity,
    mongodb,
    right_arrow_white,
    git_logo,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'chat application',
        description: 'Real-Time MERN App',
        bgImage: '/work-1.png',
        link: 'https://github.com/IBsai2112/Privacy-Talk',
    },
    {
        title: 'Restaurant Site',
        description: 'Secure Food Ordering System',
        bgImage: '/work-2.png',
        link: 'https://github.com/IBsai2112/food-ordering-system',
    },
    {
        title: 'MOVAA',
        description: 'Animatated Clothing-Brand',
        bgImage: '/work-5.png',
        link: 'https://github.com/IBsai2112/MOVAA-Clothing-Brand',
    },
    {
        title: 'Neymar-Edit',
        description: 'Animatated Neymar biopic',
        bgImage: '/work-6.jpeg',
        link: 'https://github.com/IBsai2112/Neymar-edit',
    },
    {
        title: 'Scroll-Animation',
        description: 'GSAP Animation',
        bgImage: '/work-3.png',
        link: 'https://scroll-animation-two-bice.vercel.app/',
    },
    {
        title: 'MovieSearch',
        description: 'Movie Discovery App',
        bgImage: '/work-4.png',
        link: 'https://movie-search-six-iota.vercel.app',
    },
    // {
    //     title: 'MovieSearch',
    //     description: 'Movie Discovery App',
    //     bgImage: '/work-4.png', 
    // },
]

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'DevOps on AWS and Project Management',
        description: 'AWS DevOps certification demonstrating skills in cloud deployment, automation, and project management using Amazon Web Services.',
        link: 'https://drive.google.com/file/d/1oU2BlmoWkU9c8oJXFV4c3BUO2uCo1VZ1/view?usp=sharing' // optional: can link directly to the certification post if you have one
    },
    {
        icon: assets.mobile_icon,
        title: 'Full-Stack Web Development (Placeholder)',
        description: 'MERN Stack certification showcasing full-stack development skills using React, Node.js, Express.js, MongoDB, and Redux.',
        link: 'https://drive.google.com/file/d/1HCiRMORVFzaHZobbh1W5Tf-bKTLlU2it/view?usp=sharing'
    },
    {
        icon: assets.ui_icon,
        title: 'React & Modern JavaScript (Placeholder)',
        description: 'Meta-authorized React Native certification demonstrating expertise in building cross-platform mobile applications using React Native and modern JavaScript.',
        link: 'https://drive.google.com/file/d/1A9g7WYgLyIBPb9f01BUFoPvX3DEDnWUd/view?usp=sharing'
    },
    {
        icon: assets.graphics_icon,
        title: 'Microsoft Azure Cloud Services',
        description: 'Microsoft-authorized Azure Cloud Services certification demonstrating foundational knowledge of cloud computing, Azure infrastructure, and cloud application deployment.',
        link: 'https://drive.google.com/file/d/1OzFSwHr5EwaOek3QtfliJyliqcBepEZR/view?usp=sharing'
    }
]

export const infoList = [
    
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, React Js, Angular Js, Express Js, node Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: '🎓 B.Tech in Information Technology, MIT-ADT University, Pune' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Chat App, Animation Websites, Restaurant App & more' }
];


export const toolsData = [
    assets.js, assets.java, assets.python, assets.firebase, assets.figma, assets.expressJs, assets.angular, assets.nextJs, assets.npm, assets.tailwind, assets.framerMotion, assets.gsap, assets.mongodb, assets.sql, assets.aws, assets.unity, assets.git,
];