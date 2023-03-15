from django.http import HttpResponseBadRequest
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rembg import remove
from PIL import Image
from io import BytesIO

@api_view(['POST'])
def remove_bg(request):
    try:
        # Get the image from the request
        img = request.FILES.get('image')
        if not img:
            return HttpResponseBadRequest('Image not found in request')

        # Open the image using PIL
        input_img = Image.open(img)

        # Remove the background using rembg
        output_img = remove(input_img)

        # Save the output image as a byte stream
        buffer = BytesIO()
        output_img.save(buffer, format='PNG')
        image_bytes = buffer.getvalue()

        # Return the output image as a response
        return HttpResponse(image_bytes, content_type='image/png')
    except Exception as e:
        return HttpResponseBadRequest(str(e))