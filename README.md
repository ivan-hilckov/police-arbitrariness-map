# Карта полицейского насилия по округам Москвы

Интерактивная карта просмотра нарушений со стороны полиции по округам и ОВД Москвы.

Сайт: https://ivan-hilckov.github.io/police-arbitrariness-map
[Презентация в pdf](https://github.com/ivan-hilckov/police-arbitrariness-map/raw/master/police-arbitrariness-map.pdf) https://github.com/ivan-hilckov/police-arbitrariness-map/raw/master/police-arbitrariness-map.pdf


На карте отмечены все округа и ОВД Москвы. При нажатии на любой из них отображается информационный диалог с описанием и количеством нарушений из этого округа или ОВД.

Работает как с ПК, так и с телефона.

![](demo.gif)

Данные взяты из [ОВД-Инфо](https://ovdinfo.org).

Проект создан в рамках [I онлайн-хакатона в поддержку политических заключенных](https://github.com/developers-against-repressions/devs-against-the-machine/issues/17).

### Зачем и для кого этот проект

Наш проект призван количественно оценить качество работы отделов полиции во время акций протеста в Москве.
Проект может быть полезен как протестующим и журналистам, так и сотрудникам внутренних органов.

## Техническая часть

### Frontend

[Mapbox](https://www.mapbox.com/) в качестве карты.

React для отображения.

Blueprintjs для стилей.

### Backend

Так как проект очень простой, то его нет. Все данные хранятся в файлах, которые при необходимости обновляются вручную участниками команды.

### С деталями реализации можно подробно ознакомиться в нашей [презентации](https://github.com/ivan-hilckov/police-arbitrariness-map/raw/master/police-arbitrariness-map.pdf)
