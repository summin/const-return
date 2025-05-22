variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "eu-central-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for website hosting"
  type        = string
  default     = "const-return-website"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
} 