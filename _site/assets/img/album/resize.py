#!/usr/bin/env python3
#resize all images int a current working directory to #fit a300x 300 square,



import os 
from PIL import Image
SQUARE_FIT_SIZE = 1536


os.makedirs('sized',exist_ok=True)
#loop over all files in the working directory

for filename in os.listdir('.'):
    if not (filename.endswith('.png') or filename.endswith('jpg')):
        continue
    im=Image.open(filename)
    width,height = im.size
    half_width = width/2
    half_height = height/2
    # height = int((SQUARE_FIT_SIZE/width)*height)
    # width = SQUARE_FIT_SIZE
    # height= 300
    # width = 200
        #resizes the photo
    print ( 'REsizing %s...' %(filename))
    # im = im.crop((200,100,1024,1236))
    # crop is left, top , right, bot
    im2 = im.crop((0,0,1080,1440))


    im2.save(os.path.join('sized', filename))