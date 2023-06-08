from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with the correct front-end URL
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)


class Paragraph(BaseModel):
    paragraph: str


@app.post("/count")
def count_chars(data: Paragraph):
    return {"count": len(data.paragraph)}
