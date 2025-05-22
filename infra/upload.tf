# Upload all files from the public directory to S3
resource "aws_s3_object" "public_files" {
  for_each = fileset("${path.module}/../public", "**/*")

  bucket       = aws_s3_bucket.website_bucket.id
  key          = each.value
  source       = "${path.module}/../public/${each.value}"
  content_type = lookup({
    "html" = "text/html",
    "css"  = "text/css",
    "js"   = "application/javascript",
    "json" = "application/json",
    "png"  = "image/png",
    "jpg"  = "image/jpeg",
    "jpeg" = "image/jpeg",
    "gif"  = "image/gif",
    "svg"  = "image/svg+xml",
    "ico"  = "image/x-icon",
    "txt"  = "text/plain",
  }, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")

  etag = filemd5("${path.module}/../public/${each.value}")
} 