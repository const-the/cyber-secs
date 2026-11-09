# Jak działa pisanie dokumentacji

## ./components/

Zawiera wszystkie obiekty zawarte w bloku components do których odwołujemy się w naszych dokumentacjach

## ./paths/

Zawiera pliki podzielone na kategorie endpointów które implementują. (np authentication.yaml zawiera endpointy do logowania)
W plikach .yaml mają się znajdować tylko Path Objects które do których odwołujemy się w głównym pliku.

## ./temp/


Zawiera tymczasowo umieszczone w nim pliki które należy zmodularyzować żeby ułatwić przepisywanie. Mergując do swoich branchów pliku do przepisania umieść tutaj i skasuj gdy potwierdzisz że wszystko z niego jest dobrze przepisane.

## ./openAPI.yaml

główny plik zawierający wszystkie endpointy który jedynie odwołuje się do sprecyzowanych przez nas w ./paths/ Path Objects
plik ma się składać jedynie z odwołań i nie może samemu definiować żadnych komponentów ani ścieżek
