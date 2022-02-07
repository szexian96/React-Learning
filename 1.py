animals = {
    "チーダー": 110,
    "トナカイ": 80,
    "シマウマ": 60,
    "ライオン": 58,
    "ラクダ": 30
}

cities = {
    "静岡": 233.1,
    "名古屋": 398.9,
    "大阪": 548
}


def time(speed, distance):
    for key in speed:
        speed = speed[key]
        print(key)
        print('-------------')
        for key in distance:
            distance = distance[key]
            print(key)
            print(f'{round(distance/speed,2)} 時間')
            print()


time(animals, cities)
