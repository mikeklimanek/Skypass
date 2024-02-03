import pygame
import math
import time
import random

with open("web_mini_projects/pi-1million.txt", "r") as file:
    pi = file.read()

digits = [int(digit) for digit in pi]

pygame.init()
width, height = 2560, 1440
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Pi Visualization")

# colors can be randomized
# red = (255, 0, 0), white = (255, 255, 255)
colors = [(255, 255, 255)]
color_index = 0

running = True
clock = pygame.time.Clock()

counts = [0] * 10
index = 0
positions = {}

scaling_factor = 3


font = pygame.font.Font(None, 36)

def get_offset_angle(angle, offset):
    return angle + offset

def get_offset_coordinates(x, y, offset, angle):
    new_x = x + offset * scaling_factor * math.cos(angle)
    new_y = y + offset * scaling_factor * math.sin(angle)
    return new_x, new_y

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((0, 0, 0))
    rotation_angle_radians = math.radians(90)
    pygame.draw.circle(screen, (255, 255, 255), (width // 2, height // 2), 605, 5)

    current_digit = digits[index]
    index += 1
    counts[current_digit] += 1


    for i in range(len(digits) - 1):
        start_digit = digits[i]
        end_digit = digits[i + 1]

        angle_start = (start_digit * (2 * math.pi) / len(counts)) + rotation_angle_radians
        angle_end = (end_digit * (2 * math.pi) / len(counts)) + rotation_angle_radians




        x_start = width // 2 + 200 * scaling_factor * math.cos(angle_start)
        y_start = height // 2 + 200 * scaling_factor * math.sin(angle_start)
        x_end = width // 2 + 200 * scaling_factor * math.cos(angle_end)
        y_end = height // 2 + 200 * scaling_factor * math.sin(angle_end)
        rotation_angle_radians += 1

        # key = (start_digit, end_digit)
        # if key in positions:
        #     offset_angle = get_offset_angle(math.atan2(y_end - y_start, x_end - x_start), positions[key])
        #     x_end, y_end = get_offset_coordinates(x_end, y_end, 10, offset_angle)

        # positions[key] = positions.get(key, 0) + 0.02

        # index += 1
        

        line_color = pygame.Color(*colors[color_index % len(colors)])
        color_index += 1

        pygame.draw.line(screen, line_color, (x_start, y_start), (x_end, y_end), 1)
        # print(f"Digits Used: {i}")
        screen.blit(font.render(f"Digits Used: {i}", True, (255, 255, 255)), (0, 0))
        pygame.display.flip()
        # pygame.time.delay(100)
        # clock.tick(1)
    pygame.quit()


