with open('web_mini_projects/pi-1million.txt', 'r') as file:
    pi = file.read()


digit_counts = {str(digit): 0 for digit in range(10)}

for digit in pi:
    if digit.isdigit():
        digit_counts[digit] += 1


with open('web_mini_projects/counts_of_pi', 'w') as output_file:
    for digit, count in digit_counts.items():
        output_file.write(f'{digit}: {count} times\n')

print('Done!')
    