output "website_endpoint" {
  description = "S3 website endpoint"
  value       = aws_s3_bucket_website_configuration.website_configuration.website_endpoint
}

output "website_domain" {
  description = "S3 website domain"
  value       = aws_s3_bucket_website_configuration.website_configuration.website_domain
}

output "uploaded_files" {
  description = "List of files uploaded to S3"
  value       = [for file in aws_s3_object.public_files : file.key]
} 