from wxpy import *
import math
import PIL.Image as Image
import os
import sys
import shutil


folder_name = "/Users/jianghai/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/41b2765b32c88558d66006c67fad7655/Avatar"

# 获取下载的头像文件
ls = os.listdir(folder_name)

# 去除非 .jpg 文件
for filter_ls in ls:
	if ".jpg" in filter_ls:
		continue
	else:
		ls.remove(filter_ls)

# 头像墙尺寸
image_size = 5120

each_size = math.floor(image_size/math.floor(math.sqrt(len(ls))))
x_lines = math.ceil(math.sqrt(len(ls)))
y_lines = math.ceil(math.sqrt(len(ls)))
image = Image.new('RGB', (each_size * x_lines, each_size * y_lines))

x = 0
y = 0
step = 0
max = len(ls)

for file_names in ls:
	try:
		img = Image.open(folder_name + '/' + file_names)
		print("正在处理第" + str(step) + "个，共 " + str(max) + " 个，当前："  + file_names)
	except IOError:
		continue
	else:
		img = img.resize((each_size, each_size))
		image.paste(img, (x * each_size, y * each_size))
		x = x + 1
		step = step + 1
		if x == x_lines:
			x = 0
			y += 1
				
img = image.save("/Users/jianghai/Desktop/allAvatar.jpg")


try:
	print("收尾，清理临时文件")
except FileNotFoundError:
	print("没什么好删的")

print("！！！\n生成完毕!")