import pygame
import math

with open("web_mini_projects/pi-1million.txt", "r") as file:
    pi = file.read()

digits = [int(digit) for digit in pi]

pygame.init()
width, height = 800, 800
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Pi Visualization")

running = True
clock = pygame.time.Clock()

counts = [0] * 10
index = 0
positions = {}

def get_offset_angle(angle, offset):
    return angle + offset

def get_offset_coordinates(x, y, offset, angle):
    new_x = x + offset * math.cos(angle)
    new_y = y + offset * math.sin(angle)
    return new_x, new_y

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((0, 0, 0))
    pygame.draw.circle(screen, (255, 255, 255), (width // 2, height // 2), 400, 1)

    current_digit = digits[index]
    index += 1
    counts[current_digit] += 1

    for i in range(len(digits) - 1):
        start_digit = digits[i]
        end_digit = digits[i + 1]

        angle_start = start_digit * (2 * math.pi) / len(counts)
        angle_end = end_digit * (2 * math.pi) / len(counts)

        x_start = width // 2 + 200 * math.cos(angle_start)
        y_start = height // 2 + 200 * math.sin(angle_start)

        x_end = width // 2 + 200 * math.cos(angle_end)
        y_end = height // 2 + 200 * math.sin(angle_end)

        key = (start_digit, end_digit)
        if key in positions:
            offset_angle = get_offset_angle(math.atan2(y_end - y_start, x_end - x_start), positions[key])
            x_end, y_end = get_offset_coordinates(x_end, y_end, 10, offset_angle)

        positions[key] = positions.get(key, 0) + 0.02

        pygame.draw.line(screen, (255, 255, 255), (x_start, y_start), (x_end, y_end), 1)

    pygame.display.flip()
    clock.tick(500)  

pygame.quit()



