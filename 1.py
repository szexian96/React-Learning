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


def time(speed,distance):
    return distance / speed


def city(animal):
    times = {}
    for key, value in cities.items():
        times[key] = time(animal,value)
    return times

for key,value in animals.items():
    times = city(value)
    print("{}: ".format(key))
    for k, v in times.items():
        print(f"\t{k}: {round(v,1)}h")
