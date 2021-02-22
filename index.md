---
permalink: /
title: Trudi - Homepage
---

<div class="flex justify-center flex-wrap p-5">
    {% for item in site.data.soaps.soaps %}
      <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 m-5 mt-12 bg-white bg-opacity-75 transition duration-500 easi-in-out transform hover:scale-110">
          <img class="w-full lazy" src="/assets/pictures/{{ item.picture }}.png" alt="Picture of {{ item.name }}">
          <div class="px-6 pt-4">
            <div class="font-bold text-xl mb-1">{{ item.name }}</div>
            <div class="flex flex-wrap text-grey-darker text-base items-center">
                <p class="text-grey-darker text-base">Essential oils:</p>
                {% for ingredient in item.ingredients %}
                    <div class="rounded-full bg-gray-200 p-2 m-1 text-center">{{ ingredient }}</div>
                {% endfor %}
            </div>
            <p class="text-grey-darker text-base">Suited for: {{ item.suitability }}</p>
          </div>
          <div class="px-6 py-4">
            {% for tag in item.tags %}
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
    {% endfor %}
</div>

