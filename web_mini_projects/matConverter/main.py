
# reminder for .exe conversion to make desktop app
# run command pyinstaller --onefile converter.py 
# talent books needed after conversion: 9 green, 63 blue, 114 purple

def convert_talents(green_talent, blue_talent, purple_talent):
    exchange_rate = 3

    if green_talent > 9:
        green_convertible = (green_talent - 9) // exchange_rate * exchange_rate
        green_talent -= green_convertible
        added_blue = green_convertible // exchange_rate
        blue_talent += added_blue
        print(f"After green to blue conversion: {green_talent} greens left, +{added_blue} new blues")

    if blue_talent > 63:
        blue_convertible = (blue_talent - 63) // exchange_rate * exchange_rate
        blue_talent -= blue_convertible
        added_purple = blue_convertible // exchange_rate
        purple_talent += added_purple
        print(f"After blue to purple conversion: {blue_talent} blues left, +{added_purple} new purples")

    return green_talent, blue_talent, purple_talent and print(f"Final: {green_talent} green, {blue_talent} blue, {purple_talent} purple")


while True:
    green_talent = int(input("Enter the number of green talent: "))
    blue_talent = int(input("Enter the number of blue talent: "))
    purple_talent = int(input("Enter the number of purple talent: "))

    convert_talents(green_talent, blue_talent, purple_talent)

    run_again = input("Do you want to run again? (y/n): ").lower()
    if run_again != 'y':
        break 

print("Exiting program.")