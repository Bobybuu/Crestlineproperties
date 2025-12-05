
"""
Django settings for pristineprimer project.
"""

import os
from pathlib import Path

# ---------------------------
# BASE DIRECTORY
# ---------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# ---------------------------
# SECURITY SETTINGS
# ---------------------------
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', 'your-secret-key-here')  # Use env var in production!
DEBUG = False  # Set to False in production

ALLOWED_HOSTS = [
    "54.242.118.112",  # Your EC2 IP
    "localhost",
    "127.0.0.1", 
    "crestlineproperties.co.ke",
    "www.crestlineproperties.co.ke",
    "api.crestlineproperties.co.ke",
    "3.22.222.35", 
    "172.31.47.183",
]

# ---------------------------
# APPLICATIONS
# ---------------------------
INSTALLED_APPS = [
    # Jazzmin must come before django.contrib.admin
    'jazzmin',
    
    # Django default apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party apps
    'corsheaders',
    'rest_framework',
    'django_ses',  # AWS SES integration
    
    'health_check',
    'health_check.db',
    'health_check.cache',  # Cache health check
    'health_check.storage',  # Storage health check

    # Local apps
    'users',
    'properties',
    'newsletter',  # Newsletter app added
]

# ---------------------------
# MIDDLEWARE
# ---------------------------
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # Should be before CommonMiddleware
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',  # CSRF middleware
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# ---------------------------
# URLS / WSGI
# ---------------------------
ROOT_URLCONF = 'pristineprimer.urls'
WSGI_APPLICATION = 'pristineprimer.wsgi.application'

# ---------------------------
# TEMPLATES
# ---------------------------
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# ---------------------------
# DATABASE (PostgreSQL) - SINGLE CORRECTED VERSION
# ---------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME', 'Crestlinepropertiesdb'),
        'USER': os.getenv('DB_USER', 'postgres'),
        'PASSWORD': os.getenv('DB_PASSWORD', 'Chrispine9909'),
        'HOST': os.getenv('DB_HOST', 'localhost'),
        'PORT': os.getenv('DB_PORT', '5434'), 
    }
}

# ---------------------------
# PASSWORD VALIDATION
# ---------------------------
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# ---------------------------
# INTERNATIONALIZATION
# ---------------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# ---------------------------
# STATIC & MEDIA FILES
# ---------------------------
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
# (Optional) Uncomment if you use a local static folder
# STATICFILES_DIRS = [BASE_DIR / 'static']

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# ---------------------------
# DEFAULT PRIMARY KEY FIELD TYPE
# ---------------------------
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# ---------------------------
# CUSTOM USER MODEL
# ---------------------------
AUTH_USER_MODEL = 'users.User'

# ---------------------------
# DJANGO REST FRAMEWORK
# ---------------------------
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20
}

# ---------------------------
# CORS CONFIGURATION
# ---------------------------
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000", 
    "https://crestlineproperties.co.ke",
    "https://www.crestlineproperties.co.ke",
    "https://api.crestlineproperties.co.ke",
]

CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = [
    "https://crestlineproperties.co.ke",
    "https://www.crestlineproperties.co.ke", 
    "https://api.crestlineproperties.co.ke",
]

CSRF_COOKIE_DOMAIN = '.crestlineproperties.co.ke'

DEFAULT_FROM_EMAIL = 'Crestline Properties <info@crestlineproperties.co.ke>'
NEWSLETTER_FROM_EMAIL = 'newsletter@crestlineproperties.co.ke'
 
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

CORS_EXPOSE_HEADERS = ['X-CSRFToken']

# ---------------------------
# SESSION & CSRF SETTINGS
# ---------------------------
SESSION_ENGINE = 'django.contrib.sessions.backends.db'
SESSION_COOKIE_AGE = 1209600  # 2 weeks in seconds
SESSION_COOKIE_NAME = 'crestline_session'  # Changed from pristineprimier_session

# Security settings for cookies
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SESSION_COOKIE_SAMESITE = 'None'
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SAMESITE = 'None'
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_DOMAIN = '.crestlineproperties.co.ke'  # Fixed domain

# ---------------------------
# AWS SES CONFIGURATION
# ---------------------------
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'email-smtp.us-east-2.amazonaws.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv('AWS_SES_SMTP_USERNAME')
EMAIL_HOST_PASSWORD = os.getenv('AWS_SES_SMTP_PASSWORD')
DEFAULT_FROM_EMAIL = 'Crestline Properties <info@crestlineproperties.co.ke>'

# Development override
if DEBUG:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
    # OR for file-based email testing:
    # EMAIL_BACKEND = 'django.core.mail.backends.filebased.EmailBackend'
    # EMAIL_FILE_PATH = BASE_DIR / 'sent_emails'

# ---------------------------
# NEWSLETTER SPECIFIC SETTINGS - CORRECTED DOMAIN
# ---------------------------
NEWSLETTER_SETTINGS = {
    'POPUP_DISMISSAL_DAYS': 3,
    'WELCOME_EMAIL_SUBJECT': 'Welcome to Crestline Properties Newsletter!',
    'FROM_EMAIL': 'Crestline Properties <newsletter@crestlineproperties.co.ke>',
    'REPLY_TO_EMAIL': 'info@crestlineproperties.co.ke',
    'ADMIN_EMAIL': 'admin@crestlineproperties.co.ke',
    'CONFIRMATION_REQUIRED': False,
    'MAX_EMAILS_PER_HOUR': 100,  # SES limit awareness
    'TRACK_OPENS': True,
    'TRACK_CLICKS': True,
}

# ---------------------------
# SECURITY SETTINGS FOR PRODUCTION
# ---------------------------
if not DEBUG:
    # Security settings
    SECURE_SSL_REDIRECT = False
    SECURE_HSTS_SECONDS = 31536000  # 1 year
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    X_FRAME_OPTIONS = 'DENY'

    # Additional production settings
    SESSION_COOKIE_HTTPONLY = True
    CSRF_COOKIE_HTTPONLY = True

    # Switch to actual SES in production
    EMAIL_BACKEND = 'django_ses.SESBackend'

# ---------------------------
# LOGGING CONFIGURATION
# ---------------------------
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': BASE_DIR / 'django.log',
            'formatter': 'verbose',
        },
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': True,
        },
        'newsletter': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
        'django_ses': {
            'handlers': ['console', 'file'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}

# ---------------------------
# FILE UPLOAD SETTINGS
# ---------------------------
FILE_UPLOAD_MAX_MEMORY_SIZE = 5242880  # 5MB
DATA_UPLOAD_MAX_MEMORY_SIZE = 5242880  # 5MB

# ---------------------------
# CACHE CONFIGURATION (Optional)
# ---------------------------
# For better performance, you can add Redis/Memcached later
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'unique-snowflake',
    }
}

# ==============================================================================
# JAZZMIN ADMIN CONFIGURATION
# ==============================================================================

JAZZMIN_SETTINGS = {
    # title of the window
    "site_title": "Crestline Properties Admin",
    
    # Title on the login screen
    "site_header": "Crestline Properties",
    
    # Title on the brand (19 chars max)
    "site_brand": "Crestline Properties",
    
    # Logo to use for your site, must be present in static files, used for brand on top left
    # "site_logo": "books/img/logo.png",
    
    # Logo to use for your site, must be present in static files, used for login form logo (defaults to site_logo)
    "login_logo": None,
    
    # Logo to use for login form in dark themes (defaults to login_logo)
    "login_logo_dark": None,
    
    # CSS classes that are applied to the logo above
    "site_logo_classes": "img-circle",
    
    # Relative path to a favicon for your site, will default to site_logo if absent (ideally 32x32 px)
    "site_icon": None,
    
    # Welcome text on the login screen
    "welcome_sign": "Welcome to Crestline Properties Admin Dashboard",
    
    # Copyright on the footer
    "copyright": "Crestline Properties Ltd",
    
    # Field name on user model that contains avatar ImageField/URLField/CharPark or callable that receives the user
    "user_avatar": None,
    
    ############
    # Top Menu #
    ############
    
    # Links to put along the top menu
    "topmenu_links": [
        # Url that gets reversed (Permissions can be added)
        {"name": "Home", "url": "admin:index", "permissions": ["auth.view_user"]},
        
        # external url that opens in a new window (Permissions can be added)
        {"name": "Live Site", "url": "https://crestlineproperties.co.ke", "new_window": True},
        
        # model admin to link to (Permissions checked against model)
        {"model": "auth.User"},
        
        # App with dropdown menu to all its models pages (Permissions checked against models)
        {"app": "users"},
        {"app": "properties"},
        {"app": "newsletter"},
    ],
    
    #############
    # User Menu #
    #############
    
    # Additional links to include in the user menu on the top right ("app" url type is not allowed)
    "usermenu_links": [
        {"name": "Live Site", "url": "https://crestlineproperties.co.ke", "new_window": True},
        {"model": "auth.user"}
    ],
    
    #############
    # Side Menu #
    #############
    
    # Whether to display the side menu
    "show_sidebar": True,
    
    # Whether to aut expand the menu
    "navigation_expanded": True,
    
    # Hide these apps when generating side menu e.g (auth)
    "hide_apps": [],
    
    # Hide these models when generating side menu e.g (auth.user)
    "hide_models": [],
    
    # List of apps (and/or models) to base side menu ordering off of (does not need to contain all apps/models)
    "order_with_respect_to": ["auth", "users", "users.user", "properties", "newsletter"],
    
    # Custom links to append to app groups, keyed on app name
    "custom_links": {
        "properties": [{
            "name": "View Properties", 
            "url": "/api/properties/", 
            "icon": "fas fa-home",
            "permissions": ["properties.view_property"]
        }]
    },
    
    # Custom icons for side menu apps/models
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
        "users.User": "fas fa-user-tie",
        "properties.Property": "fas fa-home",
        "newsletter.Subscriber": "fas fa-envelope",
    },
    
    # Icons that are used when one is not manually specified
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    
    #################
    # Related Modal #
    #################
    
    # Use modals instead of popups
    "related_modal_active": False,
    
    #############
    # UI Tweaks #
    #############
    
    # Relative paths to custom CSS/JS scripts (must be present in static files)
    "custom_css": None,
    "custom_js": None,
    
    # Whether to show the UI customizer on the sidebar
    "show_ui_builder": True,
    
    ###############
    # Change view #
    ###############
    
    # Render out the change view as a single form, or in tabs, current options are
    # - single
    # - horizontal_tabs (default)
    # - vertical_tabs
    # - collapsible
    # - carousel
    "changeform_format": "horizontal_tabs",
    
    # override change forms on a per modeladmin basis
    "changeform_format_overrides": {"auth.user": "collapsible", "auth.group": "vertical_tabs"},
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": "navbar-dark",
    "accent": "accent-primary",
    "navbar": "navbar-dark",
    "no_navbar_border": False,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-dark-primary",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": False,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "default",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    }
}

# ---------------------------
# ADMIN SITE CONFIGURATION
# ---------------------------
ADMIN_SITE_HEADER = "Crestline Properties Administration"
ADMIN_SITE_TITLE = "Crestline Properties Admin Portal"
ADMIN_INDEX_TITLE = "Welcome to Crestline Properties Admin"