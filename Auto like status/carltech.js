import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

def download_music(url):
    """Downloads music from the given URL.

    Args:
        url: The URL of the music file.
    """

    response = requests.get(url, stream=True)
    total_size_in_bytes = int(response.headers.get('content-length', 0))
    block_size = 1024  # 1 Kibibyte
    progress_bar = tqdm(total=total_size_in_bytes, unit='iB', unit_scale=True)

    with open('music.mp3', 'wb') as file:
        for data in response.iter_content(block_size):
            progress_bar.update(len(data))
            file.write(data)

    progress_bar.close()

# Example usage:
url = "https://example.com/music.mp3"  # Replace with the actual URL
download_music(url)
