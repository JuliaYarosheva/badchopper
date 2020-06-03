export default [
    {
        label: 'Филиалы',
        icon: 'department',
        route: '/adminPanel/departments/',
        items: [],
        hasRoute: true
    },
    {
        label: 'Сотрудники',
        route: '/adminPanel/employee/',
        icon: 'employee',
        hasRoute: false,
        items: [
            {
                label: 'Мастера',
                route: '/adminPanel/employee/barbers/',
                id: 1,
                hasRoute: true,
                items: []
            },
            {
                label: 'Менеджеры',
                route: '/adminPanel/employee/stuff/',
                id: 2,
                hasRoute: true,
                items: []
            }
        ]
    },
    {
        label: 'Услуги',
        route: '/adminPanel/assistance',
        icon: 'assistance',
        hasRoute: true,
        items: []
    },
    {
        label: 'Отзывы',
        route: '/adminPanel/feedbacks',
        icon: 'feedbacks',
        hasRoute: true,
        items: []
    }

]

