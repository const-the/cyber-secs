# Architektura folderów

```tree
cyber-secs
├── api         - zawiera wygenerowane z /doc/api/openAPI.yaml interfacy, NIE RUSZAMY ICH 
│   ├── README.md
│   └── ...
├── doc         - zawiera pliki związane z dokumentacją
│   ├── api             - zawiera dokumentacje api
│   │   ├── components          - zawiera pliki .yaml definiujące obiekty
│   │   │   └── ...
│   │   ├── paths               - zawiera pliki .yaml definiujące Path Objects
│   │   │   └── ...
│   │   ├── openAPI.yaml        - główny plik zawierający wszystkie endpointy odwołujący się do plików z paths/
│   │   └── README.md
│   └── architecture    - zawiera dokumentacje architektury projektu
│       └── README.md
└── src         - zawiera buissiness logic aplikacji używając implementacji z /api
    ├── README.md
    └── ...
```
