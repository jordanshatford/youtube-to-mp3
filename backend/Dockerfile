FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
       python3-pip python3-dev ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /backend

COPY requirements.txt ./
RUN pip3 install --no-cache-dir --upgrade pip \
    && pip3 install --no-cache-dir -r requirements.txt

COPY . .

ENTRYPOINT ["python3"]
CMD ["main.py"]
